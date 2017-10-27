'use strict'

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const multer = require('./helpers/multer');

const app = express();

app.use(cors());
app.use(multer.single('image'));

// test server
app.get('/', (req, res) => {
	res.status(200).send('OK');
});

app.listen(process.env.PORT || 3001, console.log('mixellany server listening on port 3001'));
