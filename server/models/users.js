'use strict'

const schema = new mongoose.Schema({
  fbId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  }
})

const userModel = mongoose.model('User', schema)

module.exports = userModel
