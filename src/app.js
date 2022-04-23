const app = require('express')()

app.get('/', (req, res) => res.send("OK"))
app.get('*', (req, res) => res.send('not found'))

module.exports = app