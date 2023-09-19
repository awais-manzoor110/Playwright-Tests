import {expect, type Page} from '@playwright/test'
export class toolTip {
    constructor(readonly page: Page) {
        this.page = page
    }
    async toolTip_option() {
        await this.page.getByText('Tool Tips').click()
    }
    async hover_button() {
        await this.page.locator('#toolTipButton').hover()
    }
    async hover_assertion() {
        const toolTip_text = await this.page
            .locator('.tooltip-inner')
            .textContent()
        expect(toolTip_text).toBe('You hovered over the Button')
    }
}
