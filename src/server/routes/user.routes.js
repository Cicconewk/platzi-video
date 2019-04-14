const express = require('express')
const router = express.Router()
const cors = require('cors')
const User = require('../controllers/user.controller')

const corsOptions = {
  origin: "http://192.168.1.5:8080",
  credentials: true
}

// REGISTER A NEW USER
router.options('/signup', cors(corsOptions))
router.post('/signup', cors(corsOptions), async function (req, res, next) {
  const user = {
    name: req.body.name,
    lastname: req.body.lastname,
    channel: req.body.channel,
    email: req.body.email,
    password: req.body.password
  }

  await User.create(user, res)
})

router.options('/login', cors(corsOptions))
router.post('/login', cors(corsOptions), async function (req, res, next) {
  const data = {
    email: req.body.email,
    password: req.body.password
  }

  await User.login(data, res)
})

// GET USER BY ID OR ALL USERS
router.options('/:id', cors(corsOptions))
router.get('/:id', cors(corsOptions), async function (req, res, next) {
  const user = await User.get(req.params.id, res)
  
  return res.status(200).json({message: "User retrieved", user: user})
})

router.options('/', cors(corsOptions))
router.get('/', cors(corsOptions), async function (req, res, next) {
  const users = await User.getAll(res)
  
  return res.status(200).json({message: "User retrieved", users: users})
})

// DELETE USER BY ID
router.options('/:id', cors(corsOptions))
router.delete('/:id', cors(corsOptions), async function (req, res, next) {
  const users = await User.delete(req.params.id, res)
  
  
})

// UPDATE USER BY ID
router.options('/:id', cors(corsOptions))
router.put('/:id', cors(corsOptions), async function (req, res, next) {
  const user = {
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  }
  await User.update(req.params.id, user, res)
})

module.exports = router
