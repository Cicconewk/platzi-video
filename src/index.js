const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const path = require('path')
const morgan = require('morgan')
require('dotenv').config()
const { initDatabase } = require('./database')

// SETTINGS
initDatabase()
app.set('port', process.env.PORT || 3000)

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true
}

// MIDDLEWARES
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOptions))

// ROUTES
app.options('/api/user', cors(corsOptions))
// app.options('/api/video', cors(corsOptions))
// app.options('/api/channel', cors(corsOptions))
// app.options('/api/comment', cors(corsOptions))
// app.options('/api/playlist', cors(corsOptions))
app.use('/api/user', require(path.join(__dirname, 'server', 'routes', 'user.routes')))
// app.use('/api/video', require(path.join(__dirname, 'server', 'routes', 'video.routes')))
// app.use('/api/channel', require(path.join(__dirname, 'server', 'routes', 'channel.routes')))
// app.use('/api/comment', require(path.join(__dirname, 'server', 'routes', 'comment.routes')))
// app.use('/api/playlist', require(path.join(__dirname, 'server', 'routes', 'playlist.routes')))

app.use((req, res, next) => {
  const error = new Error('404 PAGE NOT FOUND')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  return res.status(error.status || 500).json({error: {message: error.message}})
})

// SERVER
app.listen(app.get('port'), () => {
  console.log(`Express server is up on port ${app.get('port')}.`)
})
