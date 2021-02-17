const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: {
      type: String,
      required: true,
      min: 6,
      max: 1024
  },
  name: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  address: {
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    }
  },
  username: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  password: {
      type: String,
      required: true,
      minlength: 6
  },
  phone: {
      type: Date,
      default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema);