const mongoose = require('mongoose')
const URI = `mongodb://localhost:27017/platzi-video`

/**
 * Mongoose is connected to a local database
 */
module.exports = {
  initDatabase: () => {
    mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true })
      .then( () => console.log('Database connected to platzi-video'))
      .catch(err => console.log(err))
  }
}
