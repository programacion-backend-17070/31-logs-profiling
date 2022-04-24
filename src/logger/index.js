// const log = require('./log4')
// const logger = require('./winston')
const logger = require('./pino')


module.exports = {
  getLogger: (loggerName) => {
    // const logger = log.getLogger(loggerName)
    return {
      debug: (msg) => logger.debug(msg),
      warn: (msg) => logger.warn(msg),
      error: (msg) => logger.error(msg),
      info: (msg) => logger.info(msg),
      log: (msg, level = 'info') => logger.info(msg)
    }
  }
}