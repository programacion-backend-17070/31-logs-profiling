const app = require('express')()
const saludoRouter = require('./routers/saludo')

app.get('/', (req, res) => res.send("OK"))

app.use(saludoRouter)

app.get('*', (req, res) => res.send('not found'))

module.exports = app