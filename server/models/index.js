'use strict'

const Facebook = require('./facebook');
const Photos = require('./photos');
const Users = require('./users');

const mongoose = require('mongoose')
const url = "mongodb://admin:admin@ds235775.mlab.com:35775/mixellany"
mongoose.connect(url);

module.exports = {Facebook, Photos, Users};