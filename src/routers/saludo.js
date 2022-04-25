const compression = require('compression')
const router = require('express').Router()


function saludo(req, res) {
  let hi = 'Hola '
  for(let i = 0; i < 10000; i++) {
    hi += 'que tal '
  }

  res.send(hi)
}

router.get('/saludo', saludo)
router.get('/saludozip', compression(), saludo)


module.exports = router
