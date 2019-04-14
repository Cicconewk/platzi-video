const { Schema, model } = require('mongoose')
const { isInt } = require('validator')

const channelSchema = new Schema({
  name: { type: String, required: true, unique: true },
  suscriptors: { type: Number, min: 0, validate: (value => isInt(value))},
  videos: [{ type: Schema.Types.ObjectId, ref: 'Video' }]
})

module.exports = model('Channel', channelSchema)