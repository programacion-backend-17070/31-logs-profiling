const app = require('express')()
const saludoRouter = require('./routers/saludo')
const calculadoraRouter = require('./routers/calculadora')
const logger = require('./log')

app.get('/', (req, res) => res.send("OK"))

app.use(saludoRouter)
app.use(calculadoraRouter)

app.get('*', (req, res) => {
  logger.warn('la ruta no existe')
  res.send('not found')
})

module.exports = app