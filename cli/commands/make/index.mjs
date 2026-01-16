import { defineCommand } from 'citty'
import locale from './locale.mjs'

export default defineCommand({
  meta: {
    name: 'make',
    description: 'Commands to create new Nuxt UI entities.'
  },
  subCommands: {
    locale
  }
})
