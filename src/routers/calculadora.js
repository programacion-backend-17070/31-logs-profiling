const router = require('express').Router()
const logger = require('../log')

router.get('/division', (req, res) => {
  const { query } = req
  const { num1, num2 } = query

  if (num2 == 0) {
    logger.error('No se puede dividir entre 0')
    res.send('no se puede dividir entre 0')
    return 
  }

  res.send({
    resultado: num1 / num2
  })
})


module.exports = router