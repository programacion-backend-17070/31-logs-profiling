const pino = require('pino')


const transport = pino.transport({
  targets: [{
    target: 'pino-pretty',
    options: { destination: 1 }
  }, {
    target: 'pino/file',
    options: { destination: './logs/pino.app.log' },
    level: 'error'
  }]
})

module.exports = pino(transport)