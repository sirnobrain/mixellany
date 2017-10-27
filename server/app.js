'use strict'

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const index = require('./routes/index');

const multer = require('./helpers/multer');
const decodeToken = require('./helpers/decode-token');

const app = express();

app.use(cors());
app.use(multer.single('image'));

app.use('/', decodeToken, index);


app.listen(process.env.PORT || 3000, console.log('mixellany server listening on port 3001'));
