import type { Messages } from '../types'
import { defineLocale } from '../composables/defineLocale'

export default defineLocale<Messages>({
  name: 'English',
  code: 'en',
  messages: {
    dial: {
      value: 'Value'
    }
  }
})
