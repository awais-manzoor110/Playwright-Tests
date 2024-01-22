import test from '../../fixtures/basePages'

test('Verify user can drag and drop', async ({page, dragdrop}) => {
  await page.goto('/')
  await dragdrop.interaction_card()
  await dragdrop.droppable_options()
  await dragdrop.draganddrop_operation()
  await dragdrop.successfully_dropped_assertions()
})
