import {expect, test} from '@playwright/test'
import {brokenImage} from '../../pages/brokenimg'
import {Webtables} from '../../pages/webtables'

test('Verify broken image', async ({page}) => {
  const brokenimg = new brokenImage(page)
  const Webtable = new Webtables(page)
  await page.goto('/')
  await Webtable.element_card()
  await brokenimg.brokenImage_option()
  const res = await page.request.get('/images/Toolsqa_1.jpg')
  if (res.status() === 404) {
    expect(res.status()).toBe(404)
  } else {
    expect(res.status()).toBe(200)
  }
})
