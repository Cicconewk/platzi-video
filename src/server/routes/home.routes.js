const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  console.log('this is the root')
  next()
})

module.exports = router
