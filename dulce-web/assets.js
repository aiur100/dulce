'use strict';
const loadAsset = require('./utils/assetLoader').loadAsset;
const util = require('./utils/responseUtils');
module.exports.handler = async event => {
  try{
	const asset = loadAsset(event.pathParameters.asset);
	return util.buildResponse(200,asset,{"Content-Type":"text/css"},false);
  }
  catch(error){
    const viewLoader = require('./utils/viewLoader');
    return util.buildHtmlResponse( 
			500,
			viewLoader.loadView("error",{Message: error.message})
		);
  }
};
