const express = require('express')
const router = express.Router()
const commentModel = require('../models/comment')

router.get('/comment', (req, res, next) => {
  //GET ALL COMMENTS OF A VIDEO
})

router.put('/comment', (req, res, next) => {
  //INSERT NEW COMMENT DOCUMENT IN THE COMMENT COLLECTION
})

router.delete('/comment/:id', (req, res, next) => {
  //DELETE COMMENT DOCUMENT FROM THE COMMENT COLLECTION
})

module.exports = router