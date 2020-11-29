'use strict';
const resourceFactory = require('./utils/resourceFactory').resourceFactory;
module.exports.handler = async event => {
  try{
    const Resource = resourceFactory(event.pathParameters.resource);
    const methodName = event.pathParameters.methodName;
    return methodName ? 
            Resource[methodName]() :
            Resource.index();
  }
  catch(error){
    const util = require('./utils/responseUtils');
    const viewLoader = require('./utils/viewLoader');
    console.trace(error);
    return util.buildHtmlResponse( 
			500,
			viewLoader.loadView("error",{Message: error.message})
		);
  }
};
