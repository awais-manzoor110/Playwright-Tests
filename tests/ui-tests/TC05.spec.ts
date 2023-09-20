import {test} from '@playwright/test'
import {toolTip} from '../../pages/tooltip'
import {progressBar} from '../../pages/progressBar'
test('Verify the tooltip', async ({page}) => {
  const probar = new progressBar(page)
  const ttip = new toolTip(page)
  await page.goto('/')
  await probar.widget_card()
  await ttip.toolTip_option()
  await ttip.hover_button()
  await ttip.hover_assertion()
})
