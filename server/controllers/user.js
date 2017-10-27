'use strict'

const models = require('./../models');
const getImageAnalysis = require('./../helpers/comp-vision');
const generateResponse = require('./../helpers/generate-response');

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

	static findAll(req, res) {
		models.Photos.find().exec()
		.then(photos => {
			
		})
		.catch(err => {

		});
	}

	static create(req, res) {

	}

	static delete(req, res) {}
}

module.exports = User;