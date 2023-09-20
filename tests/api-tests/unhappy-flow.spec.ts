import {test, expect} from '@playwright/test'
import {apiData} from '../../test-data/api-data'

test.describe('UnHappy Flow', () => {
  let userID: any
  let token: any

  test('Creation of user account with invalid format', async ({request}) => {
    const negativeResponse = await request.post('/Account/v1/User', {
      data: {
        userName: apiData.secondUserName,
        password: apiData.invalidPassword,
      },
    })
    let userResponeBody = await negativeResponse.json()
    expect.soft(negativeResponse.status()).toBe(400)
    expect.soft(negativeResponse.statusText()).toBe('Bad Request')
    expect.soft(userResponeBody).toHaveProperty('message')
    const positiveResponse = await request.post('/Account/v1/User', {
      data: {
        userName: apiData.secondUserName,
        password: apiData.password,
      },
    })
    expect(positiveResponse.status()).toBe(201)

    let positiveResponeBody = await positiveResponse.json()

    userID = positiveResponeBody.userID
  })

  test('Gerenate token with wrong credentials', async ({request}) => {
    const negativeResponse = await request.post('/Account/v1/GenerateToken', {
      data: {
        userName: apiData.secondUserName,
        password: apiData.invalidPassword,
      },
    })
    let negativeResponeBody = await negativeResponse.json()
    expect.soft(negativeResponse.status()).toBe(200)
    expect.soft(negativeResponse.statusText()).toBe('OK')
    expect.soft(negativeResponeBody).toHaveProperty('token', null)
    expect.soft(negativeResponeBody).toHaveProperty('status', 'Failed')
    expect
      .soft(negativeResponeBody)
      .toHaveProperty('result', 'User authorization failed.')
    const positiveResponse = await request.post('/Account/v1/GenerateToken', {
      data: {
        userName: apiData.secondUserName,
        password: apiData.password,
      },
    })
    let positiveResponeBody = await positiveResponse.json()
    token = positiveResponeBody.token
  })

  test('Add a list of books with invalid isbn', async ({request}) => {
    const negativeResponse = await request.post('/BookStore/v1/Books', {
      data: {
        userId: userID,
        collectionOfIsbns: [
          {
            isbn: apiData.invalidISBN,
          },
        ],
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    let bookResponseBody = await negativeResponse.json()
    expect.soft(negativeResponse.status()).toBe(400)
    expect.soft(negativeResponse.statusText()).toBe('Bad Request')
    expect
      .soft(bookResponseBody)
      .toHaveProperty(
        'message',
        'ISBN supplied is not available in Books Collection!'
      )
  })
  test('Delete Book Store', async ({request}) => {
    const response = await request.delete(
      `https://demoqa.com/BookStore/v1/Books?UserId=${apiData.invalidUserID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    expect.soft(response.status()).toBe(401)
    expect.soft(response.statusText()).toBe('Unauthorized')
  })
})
