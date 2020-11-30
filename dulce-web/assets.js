'use strict';
const assetUtils = require('./utils/assetLoader');
const util = require('./utils/responseUtils');
module.exports.handler = async event => {
  try{
    console.log(event);
    let assetPath = event.requestContext.path.replace("/dev","");
    assetPath = assetPath.replace("/assets/","");
    let asset = assetUtils.loadAsset(assetPath);
    const extension = assetUtils.extension(assetPath);
    const contentType = assetUtils.contentType(extension);
    const extras = {};    
    let changed = false;
    if(contentType.includes("text")){
      asset = asset.toString();
      changed = true;
    }else{   
      asset = asset.toString('base64'); 
      extras["isBase64Encoded"] = true;
    }
    console.log({
      contentType,
      changed,
      extras,
      extension
    });
	  return util.buildResponse(200,asset,{"Content-Type":contentType},false,extras);
  }
  catch(error){
    const viewLoader = require('./utils/viewLoader');
    console.trace(error);
    return util.buildHtmlResponse( 
			500,
			viewLoader.loadView("error",{Message: error.message})
		);
  }
};
