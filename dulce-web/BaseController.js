'use strict';
const responseUtils = require("./utils/responseUtils");
const viewLoader = require("./utils/viewLoader");

class BaseController {
 
	constructor(){
	}
	/**
	 * @param {string} viewName 
	 * @param {Object}|{null} data 
	 */
	viewResponse(viewName,data=null){

		return responseUtils.buildHtmlResponse( 
			200,
			viewLoader.loadView(viewName,data)
		);

	}

	jsonResponse(data){
		return responseUtils.buildResponse(200,data);
	}

}

module.exports = BaseController;