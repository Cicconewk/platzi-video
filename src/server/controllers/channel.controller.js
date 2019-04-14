const Channel = require('../models/channel')

module.exports = {
  create: async (channel, res) => {
    try {
      const isChannel = await Channel.findOne({name: channel})
    
      if (!isChannel) {
        const newChannel = new Channel({ name: channel })
        return await newChannel.save()
      } else {
        return new Error('Channel name already used')
      }
    } catch (err) {
      return res.status(500).json({error: {message: "Unknown error", stack: err.stack}})
    }
  },
  get: async (channel) => {
    try {
      return await Channel.findOne({name: channel})
    } catch (err) {
      return new Error(err)
    }
  }
}