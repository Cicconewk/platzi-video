const express = require('express')
const router = express.Router()
const videoModel = require('../models/video')

router.get('/video', (req, res, next) => {
  //GET ALL DATA FROM VIDEO, LIMIT 20
})

router.get('/video/:id', (req, res, next) => {
  //GET VIDEO BY ID
})

router.put('/video', (req, res, next) => {
  //INSERT VIDEO DOCUMENT IN THE VIDEO COLLECTION
})

router.delete('/video/:id', (req, res, next) => {
  //DELETE VIDEO DOCUMENT FROM THE VIDEO COLLECTION
})

module.exports = router