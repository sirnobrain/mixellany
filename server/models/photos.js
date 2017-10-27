'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  gcsname: {
    type: String,
    required: true
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
