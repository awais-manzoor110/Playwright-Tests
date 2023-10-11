import {Webtables} from '../pages/webtables'
import {progressBar} from '../pages/progressBar'
import {brokenImage} from '../pages/brokenimg'
import {forms} from '../pages/forms'
import {toolTip} from '../pages/tooltip'
import {dragAndDrop} from '../pages/draganddrop'

import {test as baseTest} from '@playwright/test'

const test = baseTest.extend<{
  probar: progressBar
  webtable: Webtables
  brokenimg: brokenImage
  form: forms
  ttip: toolTip
  dragdrop: dragAndDrop
}>({
  probar: async ({page}, use) => {
    await use(new progressBar(page))
  },
  webtable: async ({page}, use) => {
    await use(new Webtables(page))
  },
  brokenimg: async ({page}, use) => {
    await use(new brokenImage(page))
  },
  form: async ({page}, use) => {
    await use(new forms(page))
  },
  ttip: async ({page}, use) => {
    await use(new toolTip(page))
  },
  dragdrop: async ({page}, use) => {
    await use(new dragAndDrop(page))
  },
})
export default test
export const expect = test.expect
export const describe = test.describe
