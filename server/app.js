'use strict'

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// test server
app.get('/', (req, res) => {
	res.status(200).send('OK');
});

app.listen(process.env.PORT || 3000, console.log('mixellany server listening on port 3000'));