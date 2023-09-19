import {test} from '@playwright/test'
import {dragAndDrop} from '../../pages/draganddrop'
test('Verify user can drag and drop', async ({page}) => {
  const dragdrop = new dragAndDrop(page)
  await page.goto('/')
  await dragdrop.interaction_card()
  await dragdrop.droppable_options()
  await dragdrop.draganddrop_operation()
  await dragdrop.successfully_dropped_assertions()
})
