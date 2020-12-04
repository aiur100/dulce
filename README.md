# Dulce Web-Framework
[![Total alerts](https://img.shields.io/lgtm/alerts/g/aiur100/dulce.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/aiur100/dulce/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/aiur100/dulce.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/aiur100/dulce/context:javascript)

**ALPHA - version 0.1.0** 
Inspired by Laravel, a web-application framework built for NodeJS, AWS API Gateway, AWS Lambda, and DynamoDB.  Deploy statically generated HTML pages that have the server side power of running Lambda.  

* You can create endpoints for asynchronous web application like functionality. 
* Server the initial HTML documents with templating, and other CSS or JavaScript assets.  

## Please be warned! 
This is a very rough work in progress as I explore the ideas surrounding this type of a framework. Yes, I realize you can do this with express, but I wanted to try out my own ideas. :) 

# Structure and Architecture 
* `app` - Store all *your own* application logic.
* `app > controllers` - Store your controllers here. 
	* By default, we have an example MVC endpoint set-up.
	* `HomeController` has a method called `index` which loads a view `home.html`. 
		* The `HomeController` extends `BaseController` and your future controllers should do the same.
	* `app > views` - Here are your views.  You will see `home.html` is there. 
	* `app > assets` - Contains CSS or other files you want to host.
	* The `home.html` page is loaded and delivered with using this `BaseController` method below
	```
	this.viewResponse("home",{Message:"Hello world"});
	```
* `lambda-web` is the directory for the framework code. If you like what has been done so far, you shouldn't have to make changes here.

# Templating
* When using `this.viewResponse("home",{Message:"Hello world"})` if a string matching `${Message}` is in the HTML, it will be replaced with that value of the second parameter of `this.viewResponse`.
* You can also use a template string of `${view:viewName}` and another HTML view will be loaded.  This works well to create a header / footer configuration, that is set-up by default in my examples. 

# Set-up
* Install the serverless framework which powers the lambda-web framework.

	```npm install -g serverless```

* Install dependencies 

	```npm install```

* Start your local environment 

	* ```sls offline```
	* Then visit http://localhost:3000/dev/view/home
	* The URL above hits the `app > HomeController:index`



# What's left?
I have a lot of work to do.  This is very rough, but here is the goal. 

* Have an easy to use framework CLI app that allows for template controllers, models or views to be created.
* Enable DynamoDB interfaces for data management. 
* Enable Cognito interfaces for user management. 
* I will add to this bullet list as this project gets worked on. 