'use strict'

const models = require('./../models');

class User {
	static signin(req, res) {
		models.Facebook.getUserData(req.body.access_token)
		.then(user => {
			// balikin jwt ke client, formatnya liat router
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