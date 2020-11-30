function assetPath(assetName){
	return `${__dirname}/../.././app/assets/${assetName}`
}

function loadAsset(assetName){
	const fs = require('fs');
	const file = assetPath(assetName);
	return 	fs.readFileSync(file);
}

function extension(assetName){
	return assetName.split(".")[1];
}

function contentType(extension){
	const types = {
		"css":"text/css",
		"jpg":"image/jpeg",
		"jpeg":"image/jpeg",
		"js":"text/javascript"
	};
	return types[extension];
}

module.exports = { loadAsset, contentType, extension };