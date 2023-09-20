import {test, expect} from '@playwright/test'
import {apiData} from '../../test-data/api-data'

test.describe('Happy Flow', () => {
  let userID: any
  let token: any

  test('Creation of user account', async ({request}) => {
    const response = await request.post('/Account/v1/User', {
      data: {
        userName: apiData.userName,
        password: apiData.password,
      },
    })
    let userResponeBody = await response.json()
    expect.soft(response.status()).toBe(201)
    expect.soft(response.statusText()).toBe('Created')
    expect
      .soft(userResponeBody)
      .toHaveProperty('username', `${apiData.userName}`)
    expect.soft(userResponeBody).toHaveProperty('books')
    userID = userResponeBody.userID

    const response2 = await request.post('/Account/v1/GenerateToken', {
      data: {
        userName: apiData.userName,
        password: apiData.password,
      },
    })
    let tokenResponeBody = await response2.json()
    expect.soft(response2.status()).toBe(200)
    expect.soft(response2.statusText()).toBe('OK')
    expect.soft(tokenResponeBody).toHaveProperty('token')
    expect.soft(tokenResponeBody).toHaveProperty('status', 'Success')
    expect
      .soft(tokenResponeBody)
      .toHaveProperty('result', 'User authorized successfully.')
    token = tokenResponeBody.token
  })

  test('Add a list of books', async ({request}) => {
    const response = await request.post('/BookStore/v1/Books', {
      data: {
        userId: userID,
        collectionOfIsbns: [
          {
            isbn: apiData.ISBN,
          },
        ],
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    let bookResponseBody = await response.json()
    expect.soft(response.status()).toBe(201)
    expect.soft(response.statusText()).toBe('Created')
    expect.soft(bookResponseBody).toHaveProperty('books')
    expect.soft(bookResponseBody.books).toHaveLength(1)
  })
  test('Delete Book Store', async ({request}) => {
    const response = await request.delete(
      `https://demoqa.com/BookStore/v1/Books?UserId=${userID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    expect.soft(response.status()).toBe(204)
    expect.soft(response.statusText()).toBe('No Content')
  })
})
