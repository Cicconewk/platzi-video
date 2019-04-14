const express = require('express')
const router = express.Router()
const tagModel = require('../models/tag')

router.get('/channel', (req, res, next) => {
  //GET ALL VIDEOS RELATED TO A CHANNEL, LIMIT 20
})

router.put('/channel', (req, res, next) => {
  //INSERT VIDEO REFERENCE IN THE CHANNEL COLLECTION
})

router.delete('/channel/:id', (req, res, next) => {
  //DELETE VIDEO REFERENCE FROM THE CHANNEL COLLECTION
})

module.exports = router