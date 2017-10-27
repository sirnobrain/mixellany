'use strict'

const models = require('./../models');
const getImageAnalysis = require('./../helpers/comp-vision');
const generateResponse = require('./../helpers/generate-response');
const generateToken = require('./../helpers/generate-token');
const bucket = require('./../helpers/bucket');

class User {
	static signin(req, res) {
		let token = null;
		models.Facebook.getUserData(req.body.access_token)
		.then(user => {
			const jwtoken =  generateToken(user);
			token = jwtoken;
			const value = {
				fbId: user.fbId,
				name: user.name
			}
			return models.Users.create(value)
			
		})
		.then(created => {
			const data = {
				jwtoken: token,
				user_created: created
			}
			console.log(data);
			const response = generateResponse(200, 'token generated', data, null);
			res.status(200).send(response);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static findAll(req, res) {
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
		let userFbId = req.headers.user.fbId;

		bucket.upload(req.file)
		.then(uploadedFile => {
			gcsname = uploadedFile.gcsname;
			imgUrl = uploadedFile.cloudStoragePublicUrl;
			return Promise.all([models.Users.find({fbId: userFbId}), getImageAnalysis(imgUrl)]);
		})
		.then(values => {
			const user = values[0];
			const captionAndTags = values[1];
			const value = {
				user: user._id,
				gcsname: gcsname,
				imgUrl: imgUrl,
				caption: captionAndTags.caption,
				tags: captionAndTags.tags
			}
			return models.Photos.create(value)
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
