const router = require('express').Router()

const logger = require('../logger').getLogger('error')

router.get('/division', (req, res) => {
  const { query } = req
  const { num1, num2 } = query

  if (!num2) {
    logger.error('No se puede dividir entre 0')
    res.send({
      status: 'error',
      message: 'numeros invalidos'
    })

    return
  }

  res.send({
    resultado: num1 / num2
  })
})

module.exports = router