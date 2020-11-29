/*
const BaseController = require('../BaseController');

const Base = new BaseController();
console.log(Base);
const test = Base.viewResponse("home");
console.log(test);
*/

const HomeController = require('../../app/controllers/HomeController');

const Test = new HomeController();

console.log(Test.index());