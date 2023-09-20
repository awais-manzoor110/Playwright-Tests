import type {Page} from 'playwright'
import {expect} from '@playwright/test'
export class Webtables {
  constructor(readonly page: Page) {
    this.page = page
  }
  async element_card() {
    await this.page.getByText('Elements').click()
  }
  async webtables_options() {
    await this.page.getByText('Web Tables').click()
  }
  async add_button() {
    await this.page.click('#addNewRecordButton')
  }
  async first_name_field(FName: string) {
    await this.page.fill('#firstName', FName)
  }
  async last_name_field(LName: string) {
    await this.page.fill('#lastName', LName)
  }
  async email_field(emial: string) {
    await this.page.fill('#userEmail', emial)
  }
  async age_field(age: string) {
    await this.page.fill('#age', age)
  }
  async salary_field(salary: string) {
    await this.page.fill('#salary', salary)
  }
  async department_field(department: string) {
    await this.page.fill('#department', department)
  }
  async submit_button() {
    await this.page.getByText('Submit').click()
  }
  async data_assertion(...userdata: Array<string>) {
    const rows_data = await this.page.$$('.rt-td')
    const testPromises = rows_data.map(async (row) => await row.textContent())
    const testResults = await Promise.all(testPromises)
    userdata.forEach((data) => {
      expect(testResults).toContain(data)
    })
  }

  async edit_button() {
    const table = await this.page.locator('.rt-table')
    const rows = await table.locator('.rt-tbody .rt-tr-group')
    const match = rows.filter({
      has: await this.page.locator('.rt-td'),
      hasText: 'Alden',
    })

    await match.locator("[id^='edit']").click()
  }
}
