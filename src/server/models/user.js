const { Schema, model } = require('mongoose')
const { isEmail, isAlpha } = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  name: { type: String, minlength: 2, maxlength: 24, required: true,
    validate: (value => { return isAlpha(value)})},
  lastname: { type: String, minlength: 2, maxlength: 24, required: true,
    validate: (value => { return isAlpha(value)})},
  email: { type: String, required: true, unique: true, 
    validate: (value => { return isEmail(value)})},
  password: { type: String, required: true },
  channel: { type: Schema.Types.ObjectId, ref: 'Channel' },
  date: { type: Date, default: Date.now }
  //subscriptions: { type: [String] }
})

userSchema.method.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, matched) => {
    if (err) return cb(err)
    cb(null, matched)
  })
}

module.exports = model('User', userSchema)