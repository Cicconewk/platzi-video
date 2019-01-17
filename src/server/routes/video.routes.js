const express = require('express')
const router = express.Router()

router.get('/', () => {
  console.log('this is the root')
})

module.exports = router
