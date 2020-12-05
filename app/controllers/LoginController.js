'use strict';
const BaseController = require("../../dulce-web/BaseController")

class LoginController extends BaseController {
	
	constructor(){
		super();
	}

	async index(){		
		return this.viewResponse("login",{ Message: "Hello world" });
	}

	testMethod(){
		return this.jsonResponse({stuff:"cookies are great"});
	}

	data(){
		return this.viewResponse("data",{Message:"Hello"});
	}

	users(){
		return this.viewResponse("users",{Message:"Hello world"});
	}
}

module.exports = LoginController;