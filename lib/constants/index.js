const NODE = 'node'
const NODE_VERSION = process.version
const BASH_EXE = 'bash'
const CMD_EXE = 'cmd.exe'
const POWERSHELL_EXE = 'powershell.exe'

const INTERFACE_PORT = 3222

const LOG_TYPE_SUCCESS = 'success'
const LOG_TYPE_ERROR = 'error'
const LOG_TYPE_WARNING = 'warning'
const LOG_TYPE_INFO = 'info'

const CMD_PATH_UNIX = '$HOME/usr/lib/node_modules/weal'
const CMD_PATH_UNIX_NVM = `$HOME/.nvm/versions/node/${NODE_VERSION}/lib/node_modules/weal`
const CMD_PATH_WIN = '%AppData%/npm/node_modules/weal'

const START_MSG = 'Initializing backend and interface server'
const SUCCEED_MSG = 'Directory opened on terminal web browser'

const OS_TYPE = Object.freeze({
  DARWIN: 'darwin',
  LINUX: 'linux',
  WINDOWS: 'win32'
})

const OS = Object.freeze({
  IS_DARWIN: process.platform === OS_TYPE.DARWIN,
  IS_LINUX: process.platform === OS_TYPE.LINUX,
  IS_WINDOWS: process.platform === OS_TYPE.WINDOWS
})

const SHELL = Object.freeze({
  IS_BASH: process.env.SHELL && process.env.SHELL.includes(BASH_EXE),
  IS_CMD: process.env.SHELL && process.env.SHELL.includes(CMD_EXE),
  IS_POWERSHELL: process.env.SHELL && process.env.SHELL.includes(POWERSHELL_EXE)
})

const COMSPEC = Object.freeze({
  IS_CMD: process.env.COMSPEC && process.env.COMSPEC.includes(CMD_EXE),
  IS_POWERSHELL: process.env.COMSPEC && process.env.COMSPEC.includes(POWERSHELL_EXE)
})

const DIR = Object.freeze({
  IS_NVM: process.env.NVM_DIR
})

const CURRENT_DIR = 'current-dir'

const HEALTH_CMD = 'health'

const CURRENT_DIR_CMD = Object.freeze({
  BASH: 'pwd',
  CMD: 'cd',
  POWERSHELL: 'cd'
})

const PROCESS_CMD = Object.freeze({
  UNIX: `${NODE} ${CMD_PATH_UNIX}/lib/process.js`,
  UNIX_NVM: `${NODE} ${CMD_PATH_UNIX_NVM}/lib/process.js`,
  WINDOWS: `${NODE} ${CMD_PATH_WIN}/lib/process.js`
})

const HTTP_SERVER_CLI = Object.freeze({
  UNIX: `${CMD_PATH_UNIX}/node_modules/http-server/bin/http-server`,
  UNIX_NVM: `${CMD_PATH_UNIX_NVM}/node_modules/http-server/bin/http-server`,
  WINDOWS: `${CMD_PATH_WIN}/node_modules/http-server/bin/http-server`
})

const INTERFACE_CMD = Object.freeze({
  UNIX: `${NODE} ${HTTP_SERVER_CLI.UNIX} ${CMD_PATH_UNIX}/dist -p ${INTERFACE_PORT} -o --silent`,
  UNIX_NVM: `${NODE} ${HTTP_SERVER_CLI.UNIX_NVM} ${CMD_PATH_UNIX_NVM}/dist -p ${INTERFACE_PORT} -o --silent`,
  WINDOWS: `${NODE} ${HTTP_SERVER_CLI.WINDOWS} ${CMD_PATH_WIN}/dist -p ${INTERFACE_PORT} -o --silent`
})

module.exports = {
  LOG_TYPE_SUCCESS,
  LOG_TYPE_ERROR,
  LOG_TYPE_WARNING,
  LOG_TYPE_INFO,
  CMD_PATH_WIN,
  CMD_PATH_UNIX,
  CMD_PATH_UNIX_NVM,
  START_MSG,
  SUCCEED_MSG,
  OS,
  SHELL,
  DIR,
  COMSPEC,
  CURRENT_DIR,
  CURRENT_DIR_CMD,
  PROCESS_CMD,
  INTERFACE_CMD,
  HEALTH_CMD
}
