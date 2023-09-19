import {test} from '@playwright/test'
import {Webtables} from '../../pages/webtables'
import {userData} from '../../test-data/userData'
test.describe('TC01 Senario A and B', () => {
  let page
  test.beforeEach(async ({browser}) => {
    page = await browser.newPage()
    const Webtable = new Webtables(page)
    await page.goto('/')
    await Webtable.element_card()
    await Webtable.webtables_options()
  })
  test('Verify user can enter new data into the table', async () => {
    const Webtable = new Webtables(page)

    await Webtable.add_button()
    await Webtable.first_name_field(userData.firstName)
    await Webtable.last_name_field(userData.lastName)
    await Webtable.email_field(userData.email)
    await Webtable.age_field(userData.age)
    await Webtable.salary_field(userData.salary)
    await Webtable.department_field(userData.department)
    await Webtable.submit_button()
    await Webtable.data_assertion(...userData.table_data)
  })
  test('Verify user can edit the row in a table', async () => {
    const Webtable = new Webtables(page)
    await Webtable.edit_button()
    await Webtable.first_name_field(userData.newfirstName)
    await Webtable.last_name_field(userData.newlastName)
    await Webtable.submit_button()
    await Webtable.data_assertion(...userData.edited_data)
  })
})
