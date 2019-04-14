const { Schema } = mongoose = require('mongoose')

const commentSchema = new Schema({
  comment: { type: String, maxlength: 250, required: true },
  date: { type: Date, default: Date.now() },
  comment_parent: { type: [Schema.Types.ObjectId], ref: 'Comment' },
  video: { type: Schema.Types.ObjectId, ref: 'Video', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

module.exports = mongoose.model('Comment', commentSchema)