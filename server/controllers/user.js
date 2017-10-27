'use strict'

const models = require('./../models');
const jwt = require('jsonwebtoken');
require('dotenv').config()

class User {
	static signin(req, res) {
		console.log('SIGN IN')
		models.Facebook.getUserData(req.body.access_token)
		.then(user => {
			// balikin jwt ke client, formatnya liat router
			console.log('--- ini user datalog --->', user)
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static findAll(req, res) {}

	static create(req, res) {}

	static delete(req, res) {}
}

module.exports = User;
