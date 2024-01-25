import {expect, type Page} from '@playwright/test'
export class dragAndDrop {
  constructor(readonly page: Page) {
    this.page = page
  }
  async interaction_card() {
    await this.page.getByText('Interactions').click()
  }
  async droppable_options() {
    await this.page.getByText('Droppable').click()
  }
  async draganddrop_operation() {
    await this.page
      .locator('#draggable')
      .dragTo(this.page.locator("#simpleDropContainer > div[id='droppable']"))
  }
  async successfully_dropped_assertions() {
    var txt = this.page.locator('.drop-box.ui-droppable.ui-state-highlight >p')
    await expect(txt).toHaveText('Dropped!')
  }
}
