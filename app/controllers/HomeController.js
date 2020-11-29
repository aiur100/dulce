'use strict';
const BaseController = require("../../dulce-web/BaseController")


class HomeControler extends BaseController {
	
	constructor(){
		super();
	}

	index(){
		return this.viewResponse("home",{Message:"Hello world"});
	}

	testMethod(){
		return this.jsonResponse({stuff:"cookies are great"});
	}

	users(){
		return this.viewResponse("users",{Message:"Hello world"});
	}
}

module.exports = HomeControler;