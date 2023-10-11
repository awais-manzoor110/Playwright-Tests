import test, {expect} from '../../fixtures/basePages'

test('Verify the tooltip', async ({page, ttip, probar}) => {
  await page.goto('/')
  await probar.widget_card()
  await ttip.toolTip_option()
  await ttip.hover_button()
  await ttip.hover_assertion()
})
