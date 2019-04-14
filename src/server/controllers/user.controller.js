const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  login: async (data ,res) => {
    const user = User.findOne({email: data.email}).select(['name','lastname'])
    
    if (user) {
      User.comparePassword(data.password, async (err, passwordMatches) => {
        if (passwordMatches) {
          const token = await jwt.sign(user, process.env.MASTER_KEY, { expiresIn: 20000})
          res.cookie('token', `JWT ${token}`, {maxAge: 3600000, httpOnly: true})
          return res.status(200).json({message: `Welcome ${user.name} ${user.lastname}`})
        }
        return res.status(500).json({error: {message: 'Password didn\'t match'}})
      })
    }
    return res.status(500).json({error: {message: 'Email not found'}})
  },
  create: async (user, res) => {
    try {
      const userExists = await User.findOne({email: user.email})

      if (userExists) {
        return res.status(500).json({error: {message: "Email already used"}})
      }
      const newUser = new User({
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        password: await bcrypt.hash(user.password, 10)
      })
      await newUser.save()
      return res.status(200).json({message: `Welcome ${user.name} ${user.lastname}`})
    } catch (err) {
      return res.status(500).json({error: {message: "Unknown error", stack: err.stack}})
    }
  },
  get: async (id, res) => {
    try {
      const user = await User.findOne({_id: id}).select(['name', 'lastname', 'email'])
      
      if (user) {
        return user
      }
      return res.status(404).json({error: {message: "User not found"}})
    } catch (err) {
      return res.status(500).json({error: {message: "Unknown error", stack: err.stack}})
    }
  },
  getAll: async (res) => {
    try {
      const users = await User.find({}).select(['name', 'lastname', 'email'])
  
      if (users) {
        return users
      }
      return res.status(404).json({error: {message: "There is no user registered"}})
    } catch (err) {
    return res.status(500).json({error: {message: "Unknown error", stack: err.stack}})
    }
  },
  delete: async (id, res) => {
    try {
      const { deletedCount } = await User.deleteOne({_id: id})

      if (deletedCount == 1) {
        return res.status(200).json({message: "User deleted successfully"})
      }
      return res.status(404).json({error: {message: "User not found"}})
    } catch (err) {
      return res.status(500).json({error: {message: "Unknown error", stack: err.stack}})
    }
  },
  update: async (id, user, res) => {
    try {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10)
      }
      const { nModified } = await User.updateOne({_id: id}, user)
        console.log(nModified)
        if (nModified == 1) {
          return res.status(200).json({message: "User updated successfully"})
        }
      return res.status(500).json({error: {message: "User NOT updated due to an unexpected error"}})
    } catch (err) {
      return res.status(500).json({error: {message: "Unknown error", stack: err.stack}})
    }
  }
}