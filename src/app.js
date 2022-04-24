const app = require('express')()
const saludoRouter = require('./routers/saludo')
const calculadoraRouter = require('./routers/calculadora')

const logger = require('./logger').getLogger('app')

app.get('/', (req, res) => res.send("OK"))

app.use(saludoRouter)
app.use(calculadoraRouter)

app.get('*', (req, res) => {
  logger.warn(`navegacion a ruta que no existe: ${req.url}`)
  res.send('not found')
})

module.exports = app