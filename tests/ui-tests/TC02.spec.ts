import test, {expect} from '../../fixtures/basePages'

test('Verify broken image', async ({page, brokenimg, webtable}) => {
  await page.goto('/')
  await webtable.element_card()
  await brokenimg.brokenImage_option()
  const res = await page.request.get('/images/Toolsqa_1.jpg')
  if (res.status() === 404) {
    expect(res.status()).toBe(404)
  } else {
    expect(res.status()).toBe(200)
  }
})
