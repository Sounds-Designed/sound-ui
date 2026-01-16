#!/usr/bin/env node
import { defineCommand, runMain } from 'citty'
import make from './commands/make/index.mjs'

const main = defineCommand({
  meta: {
    name: 'sounds-designed-ui',
    description: 'Sounds Designed UI CLI'
  },
  subCommands: {
    make
  }
})

runMain(main)
