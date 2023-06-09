#!/usr/bin/env node

const init = require('./lib/utils/init')
const cli = require('./lib/utils/cli')
const log = require('./lib/utils/log')

const weal = require('./lib/weal')

const input = cli.input
const flags = cli.flags
const { clear, debug } = flags

const boot = async () => {
  init({ clear })
  input.includes('help') && cli.showHelp(0)
  input.includes('open') && weal.open()

  debug && log(flags)
}

boot()
