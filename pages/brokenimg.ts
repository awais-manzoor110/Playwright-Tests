import type {Page} from 'playwright'
export class brokenImage {
    constructor(readonly page: Page) {
        this.page = page
    }
    async brokenImage_option() {
        await this.page.getByText('Broken Links - Images').click()
    }
}
