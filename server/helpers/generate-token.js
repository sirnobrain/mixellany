'use strict'

const jwt = require('jsonwebtoken');

module.exports = user => {
	const data = {
		fbId: user.fbId,
		name: user.name
	}

	const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
	return token;
}