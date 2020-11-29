function resourceFactory(resourceName){
	const ClassName = `${resourceName.charAt(0).toUpperCase() + resourceName.slice(1)}`;
	const path = `../../app/controllers/${ClassName}Controller.js`;
	const Resource = require(path);
	return new Resource();
}

module.exports = { resourceFactory }