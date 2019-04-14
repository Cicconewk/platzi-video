const express = require('express')
const router = express.Router()
const tagModel = require('../models/tag')

router.get('/tag', (req, res, next) => {
  //GET ALL VIDEOS RELATED TO TAG, LIMIT 20
})

router.get('/tag/:id', (req, res, next) => {
  //GET VIDEOS RELATED TO TAG BY ID
})

router.put('/tag', (req, res, next) => {
  //INSERT TAG DOCUMENT IN THE TAG COLLECTION
})

router.delete('/tag/:id', (req, res, next) => {
  //DELETE TAG DOCUMENT FROM THE TAG COLLECTION
})

module.exports = router