const { Schema } = mongoose = require('mongoose')

const playlistSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  channel: { type: Schema.Types.ObjectId, ref: 'Channel' },
  videos: { type: [Schema.Types.ObjectId], ref: 'Video' }

})

module.export = mongoose.model('Playlist', playlistSchema)