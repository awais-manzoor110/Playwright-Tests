import test, {expect} from '../../fixtures/basePages'
import {userData} from '../../test-data/userData'
test.describe('TC01 Senario A and B', () => {
  test.beforeEach(async ({webtable, page}) => {
    await page.goto('/')
    await webtable.element_card()
    await webtable.webtables_options()
  })
  test('Verify user can enter new data into the table', async ({webtable}) => {
    await webtable.add_button()
    await webtable.first_name_field(userData.firstName)
    await webtable.last_name_field(userData.lastName)
    await webtable.email_field(userData.email)
    await webtable.age_field(userData.age)
    await webtable.salary_field(userData.salary)
    await webtable.department_field(userData.department)
    await webtable.submit_button()
    await webtable.data_assertion(...userData.table_data)
  })
  test('Verify user can edit the row in a table', async ({webtable}) => {
    await webtable.edit_button()
    await webtable.first_name_field(userData.newfirstName)
    await webtable.last_name_field(userData.newlastName)
    await webtable.submit_button()
    await webtable.data_assertion(...userData.edited_data)
  })
})
