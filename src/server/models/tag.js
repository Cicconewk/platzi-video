const { Schema } = mongoose = require('mongoose')

const tagSchema = new Schema({
  name: { type: String, required: true },
  videos: { type: [Schema.Types.ObjectId], ref: 'Video', required: true }
})

module.exports = mongoose.model('Tag', tagSchema)