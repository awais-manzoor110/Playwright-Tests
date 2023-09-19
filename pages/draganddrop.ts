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
            .getByText('Drag me')
            .first()
            .dragTo(this.page.getByText('Drop Here').first())
    }
    async successfully_dropped_assertions() {
        expect(
            this.page.locator('.drop-box.ui-droppable.ui-state-highlight')
        ).toBeTruthy()
    }
}
