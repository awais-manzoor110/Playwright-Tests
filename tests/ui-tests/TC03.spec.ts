import test from '../../fixtures/basePages'
import {formData} from '../../test-data/formData'

test('Verify user can submit the form.', async ({page, form, webtable}) => {
  await page.goto('/')
  await form.form_card()
  await form.practice_form_button()
  await webtable.first_name_field(formData.firstName)
  await webtable.last_name_field(formData.lastName)
  await webtable.email_field(formData.email)
  await form.gender_check(formData.gender)
  await form.mobileNumber_field(formData.mobileNumber)
  await form.dob_field(formData.Month, formData.year, formData.day)
  await form.subject_field(formData.subject)
  await form.hobbies_check(formData.hobbies)
  await form.upload_image()
  await form.current_address_field(formData.currentAddress)
  await form.stateDropdown()
  await form.cityDropdown()
  await form.submit_button()
})
