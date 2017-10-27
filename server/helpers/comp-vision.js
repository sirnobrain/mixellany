'use strict'

const request = require('ajax-request');

module.exports = (imageUrl) => {
	return new Promise((resolve, reject) => {
		const data = { url: imageUrl };
	  const uri = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories,Tags,Description";
	  const headers = {
	  	"Content-Type": "application/json",
	    "Ocp-Apim-Subscription-Key": "81a016edf67544aeb62605a903848c86"
	  }

	  const param = {
	  	url: uri,
	  	data: data,
	  	headers: headers
	  }

	  request.post(param, (err, response, body) => {
	  	if (err) reject(err);
	  	const caption = body.description.captions ? body.description.captions[0].text : null;
	  	const tags = body.tags
	  								.filter(tag => tag.confidence >= 0.9)
	  								.map(tag => tag.name);

	  	resolve({ caption, tags });
	  })
	})
};