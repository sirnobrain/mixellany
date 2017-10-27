'use strict'

const multer = require('multer');

module.exports = multer({
	storage: multer.MemoryStorage,
	limits: {
		filesize: 10 * 1024 * 1024
	}
})