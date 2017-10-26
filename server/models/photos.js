const mongoose = require('mongoose')
const url = "mongodb://admin:admin@ds235775.mlab.com:35775/mixellany"
mongoose.connect(url)

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  imgUrl: {
    type: String,
    required: true
  },
  caption: {
    type: String,
  },
  tags: {
    type: Array
  }
})

const photoModel = mongoose.model('Photo', schema)

module.exports = photoModel
