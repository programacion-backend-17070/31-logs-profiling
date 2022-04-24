module.exports = (() => {
  const log4js = require('log4js')

  log4js.configure({
    appenders: {
      app: { type: 'console' },
      file: { type: 'file', filename: './logs/log4js.app.log' },
      error: { type: 'file', filename: './logs/log4js.error.log' },
    },
    categories: {
      default: { appenders: ['error'], level: 'error' },
      rutas: { appenders: ['file'], level: 'debug' },
      app: { appenders: ['app'], level: 'trace' }
    }
  })

  return log4js
})()