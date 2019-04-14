const { Schema, model } = require('mongoose')
const { isInt, isAlphanumeric } = require('validator')

const videoSchema = new Schema ({
  title: { type: String, required: true, validate: (value => isAlphanumeric(value))},
  author: { type: Schema.Types.ObjectId, ref: 'Channel', required: true },
  date: { type: Date, default: Date.now() },
  // data: {  },  
  views: { type: Number, min: 0, validate: (value => isInt(value))},
  likes: { type: Number, min: 0, validate: (value => isInt(value))},
  dislikes: { type: Number, min: 0, validate: (value => isInt(value))}
})

module.exports = model('Video', videoSchema )