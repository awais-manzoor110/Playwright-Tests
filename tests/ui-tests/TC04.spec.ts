import {test} from '@playwright/test'
import {progressBar} from '../../pages/progressBar'

test('Verify the progress bar', async ({page}) => {
  const probar = new progressBar(page)
  await page.goto('/')
  await probar.widget_card()
  await probar.progressBar_option()
  await probar.beforeStart_assertion()
  await probar.start_button()
  await probar.final_assertion()
})
