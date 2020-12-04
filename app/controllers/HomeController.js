'use strict';
const BaseController = require("../../dulce-web/BaseController")

class HomeControler extends BaseController {
	
	constructor(){
		super();
	}

	async index(){		
		return this.viewResponse("home",{ Message: "Hello world" });
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

module.exports = HomeControler;