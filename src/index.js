const app = require('./app')
const logger = require('./log')

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  logger.info(`Application has started with PID: ${process.pid}`)
  logger.info(`Server listening on http://localhost:${PORT}`)
})