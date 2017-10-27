'use strict';

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
