'use strict'

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const index = require('./routes/index');

const multer = require('./helpers/multer');

const app = express();

app.use(cors());
app.use(multer.single('image'));

app.use('/', index);


app.listen(process.env.PORT || 3000, console.log('mixellany server listening on port 3001'));
