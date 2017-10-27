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
			const response = generateResponse(200, 'fetch all user\'s photos', photos, null);
		})
		.catch(err => {
			const response = generateResponse(500, 'failed to retrieve user\'s photos', null, err);
		});
	}

	static create(req, res) {

	}

	static delete(req, res) {
		const options = {_id: req.params.id};

		models.Photos.deleteOne(options)
		.then(() => {
			const response = generateResponse(200, `delete photo with id ${req.params.id}`, options, null);
			res.status(200).send(response);
		})
		.catch(err => {
			const response = generateResponse(500, `failed to delete photo with id ${req.params.id}`, null, err);
			res.status(200).send(response);
		});
	}
}

module.exports = User;