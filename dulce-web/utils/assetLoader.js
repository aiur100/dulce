function assetPath(assetName){
	return `${__dirname}/../.././app/assets/${assetName}`
}

function loadAsset(assetName){
	const fs = require('fs');
	const file = assetPath(assetName);
	return 	fs.readFileSync(file).toString("utf8");
}

module.exports = { loadAsset };