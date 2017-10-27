'use strict'

const Storage = require('@google-cloud/storage')
const storage = Storage({
	projectId: 'api-project-721451771393',
	keyFilename: 'keyfile.json'
});

const bucket = storage.bucket('mixellany.belitopikuy.xyz');

const upload = (uploadedFile) => {
	return new Promise((resolve, reject) => {
		if (!uploadedFile) reject('no file to upload');
		const getUrl = (filename) => {
			return `https://storage.googleapis.com/mixellany.belitopikuy.xyz/${filename}`;
		}

		let gcsname = 'mixellany-' + uploadedFile.originalname;

		let file = bucket.file(gcsname);

		let stream = file.createWriteStream({
			metadata: { contentType: uploadedFile.mimetype }
		});

		stream.on('error', (err) => {
			uploadedFile.cloudStorageError = err;
			reject(err);
		});

		stream.on('finish', () => {
			uploadedFile.cloudStoragePublicUrl = gcsname;
			file.makePublic().then(() => {
				uploadedFile.gcsname = gcsname;
				uploadedFile.cloudStoragePublicUrl = getUrl(gcsname);
				resolve(uploadedFile);
			});
		});

		stream.end(uploadedFile.buffer);
	});
}

const destroy = (filename) => {
	return new Promise((resolve, reject) => {
		bucket.deleteFiles({prefix: filename}, err => {
			if (err) reject(err);
			resolve(200);
		});
	});
}

module.exports = {upload, destroy};