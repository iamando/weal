const APP_NAME = 'Weal'

const KEY_MODE = 'mode'
const KEY_CLEAR = 'clear'

const CMD_MODE_LIGHT = 'mode --light'
const CMD_MODE_DARK = 'mode --dark'

const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

const DEFAULT_OUTPUTS_LIST = [
  'Welcome to weal interface',
  '-------------------------',
  'The following example commands are provided:',
  '`mode --light`` will change to light theme.',
  '`mode --dark`` will change to dark theme.',
  '`clear` will clear the terminal.'
]

const KEY_CODE_ARROW_UP = 38

module.exports = {
  APP_NAME,
  KEY_MODE,
  KEY_CLEAR,
  CMD_MODE_LIGHT,
  CMD_MODE_DARK,
  LIGHT_THEME,
  DARK_THEME,
  DEFAULT_OUTPUTS_LIST,
  KEY_CODE_ARROW_UP
}
