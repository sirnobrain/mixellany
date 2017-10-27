'use strict'

const express = require('express');
const controllers = require('./../controllers');

const router = express.Router();

/*
signin with FB Login
REQUEST -- on req.body
{
	fbId: facebook id
	access_token: facebook access token
}

RESPONSE -- response object
{
	status: status,
	message: status === 200 ? `Success: ${message}.` : `Error: ${message}.`,
	data: { // null if error
		jwtoken: // token dari jwt
	}, 
	err: err  // null if not error
}
*/
router.post('/signin', controllers.User.signin);

/*
get all user photos
REQUEST -- on req.body
{
	fbId: facebook id
	access_token: facebook access token
}

RESPONSE -- response object
{
	status: status,
	message: status === 200 ? `Success: get all user's photos.` : `Error: failed to retrieve user photos.`,
	// null if error
	data: [{ 
			_id: // id from mongodb
			gcsname: // gcs name
			imageUrl: // url image
			caption: // caption
			tags: // tags
		}], 
	err: err  // null if not error
}
*/
router.get('/', controllers.User.findAll);


/*
create a new record of photo
REQUEST -- on req.body
{
	image: // image from user
}

RESPONSE -- response object
{
	status: status,
	message: status === 200 ? `Success: post new photo : `Error: failed to post new photo.`,
	// null if error
	data: { // deleted record
			_id: // id from mongodb
			gcsname: // gcs name
			imageUrl: // url image
			caption: // caption
			tags: // tags
		}, 
	err: err  // null if not error
}
*/
router.post('/', controllers.User.create);

/*
delete a record of user's photo

RESPONSE -- response object
{
	status: status,
	message: status === 200 ? `Success: delete a photo with id ${req.params.id} : `Error: failed to delete a photo with id ${req.params.id}.`,
	// null if error
	data: { // deleted record
			_id: // id from mongodb
			gcsname: // gcs name
			imageUrl: // url image
			caption: // caption
			tags: // tags
		}, 
	err: err  // null if not error
}
*/
router.delete('/:id', controllers.User.delete);

module.exports = router;