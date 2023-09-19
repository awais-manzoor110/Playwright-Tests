import {expect, type Page} from '@playwright/test'
export class progressBar {
    constructor(readonly page: Page) {
        this.page = page
    }
    async widget_card() {
        await this.page.getByText('Widgets').click()
    }
    async progressBar_option() {
        await this.page.getByText('Progress Bar').click()
    }
    async start_button() {
        await this.page.getByText('Start').click()
    }
    async beforeStart_assertion() {
        const initalValue = await this.page
            .locator('.progress-bar.bg-info')
            .textContent()
        expect(initalValue).toBe('0%')
    }
    async final_assertion() {
        await this.page.waitForSelector('#resetButton')
        const finalValue = await this.page
            .locator('.progress-bar.bg-success')
            .textContent()
        expect(finalValue).toBe('100%')
    }
}
