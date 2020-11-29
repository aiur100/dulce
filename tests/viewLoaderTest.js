const viewLoader = require('../utils/viewLoader');

const view = viewLoader.loadView("test", { Message: "This is an error message, dude"});

console.log(view);