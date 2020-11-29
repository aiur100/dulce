const ENCODING = "utf8";

function viewPath(viewName){
	return `${__dirname}/../.././app/views/${viewName}.html`
}

function loadViewHtml(viewName){
	const fs = require('fs');
	const file = viewPath(viewName);
	return 	fs.existsSync(file) ?
			fs.readFileSync(file, ENCODING) : fs.readFileSync(viewPath("error"),ENCODING);
}

function loadViewData(viewBody,data){
	const matches = viewBody.match(/(?<=\{)(.*?)(?=\})/gi);
	return matches ? matches.reduce((accum,curr) => {
		const regex = new RegExp("\\${"+curr+"}", 'gi');
		const subView = curr.split(":");
		if(subView.length > 1){
			accum = accum.replace(regex,loadView(subView[1],{}));
		}else{
			accum = accum.replace(regex,data[curr]);
		}
		return accum;
	},viewBody) : viewBody;
}

function loadView(viewName,data = null){
	console.log("Loading: ",viewName);
	return data ? loadViewData( loadViewHtml(viewName), data ) : 
					loadViewHtml(viewName);
}

module.exports = { loadView, loadViewData, loadViewHtml };