const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

// SETTINGS
app.set('port', PORT)

// MIDDLEWARES
app.use(express.json()) // This will return in JSON format the data

// ROUTES
app.use('/videos', require(path.join(__dirname, 'server', 'routes', 'video.routes')))

// STATIC FILES
app.use(express.static(path.join(__dirname, 'client', 'public')))

// SERVER
app.listen(app.get('port'), () => {
  console.log(`Express server is up on port ${PORT}.`)
})
