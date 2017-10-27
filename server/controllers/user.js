'use strict'

const models = require('./../models');
const getImageAnalysis = require('./../helpers/comp-vision');
const generateResponse = require('./../helpers/generate-response');
const generateToken = require('./../helpers/generate-token');
const bucket = require('./../helpers/bucket');

class User {
	static signin(req, res) {
		models.Facebook.getUserData(req.body.access_token)
		.then(user => {
			// balikin jwt ke client, formatnya liat router
			const jwtoken =  generateToken(user);
			const response = generateResponse(200, 'token generated', {jwtoken}, null);
			res.status(200).send(response);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static findAll(req, res) {
		console.log('GETTTTTTETETETETE', req.headers.user);
		const options = {fbId: req.headers.user.fbId};
		models.Photos.find(options).exec()
		.then(photos => {
			const response = generateResponse(200, 'fetch all user\'s photos', photos, null);
			res.status(200).send(response);
		})
		.catch(err => {
			const response = generateResponse(500, 'failed to retrieve user\'s photos', null, err);
			res.status(500).send(response);
		});
	}

	static create(req, res) {
		let gcsname = null;
		let imgUrl = null;

		bucket.upload(req.file)
		.then(uploadedFile => {
			gcsname = uploadedFile.gcsname;
			imgUrl = uploadedFile.cloudStoragePublicUrl;

			return getImageAnalysis(imgUrl);
		})
		.then(captionAndTags => {
			const value = {
				gcsname: gcsname,
				imageUrl: imgUrl,
				caption: captionAndTags.caption,
				tags: captionAndTags.tags
			}

			return models.User.create(value)
		})
		.then(created => {
			const response = generateResponse(200, 'photo uploaded', created, null);
			res.status(200).send(response)
		})
		.catch(err => {
			const response = generateResponse(500, 'failed to upload', null, err);
			res.status(500).send(response);
		});
	}

	static delete(req, res) {
		const options = {_id: req.params.id};
		const filename = req.params.imgUrl; // perlu dimodifikasi?

		models.Photos.findById(req.params.id).exec()
		.then(photo => {
			return Promise.all([models.Photos.deleteOne(options), bucket.destroy(photo.gcsname)]);
		})
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
