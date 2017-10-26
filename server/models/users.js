const mongoose = require('mongoose')
const url = "mongodb://admin:admin@ds235775.mlab.com:35775/mixellany"
mongoose.connect(url)

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
