const router = require('express').Router()
const compression = require('compression')

const saludo = (req, res) => {
  let hi = 'hola'
  for(let i = 0; i < 1000; i++) {
    hi += ' como estas? '
  }

  res.send(hi)
}

router.get('/saludo', saludo)
router.get('/saludozip', compression(), saludo)

module.exports = router