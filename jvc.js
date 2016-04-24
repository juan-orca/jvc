// jvc.js v1.0
var	_http = superagent;
var jvc = {};

jvc.serverRoot = "";
jvc.templateRoot = "";
jvc.isSinglePageArchEnabled = false;
jvc.templates = {};

jvc.setServerRoot = function(serverRoot) {
	jvc.serverRoot = serverRoot;
	return jvc;
}

jvc.setTemplateRoot = function(templateRoot) {
	jvc.templateRoot = templateRoot;
	return jvc;
}

jvc.enableSinglePageArch = function enable() {
	isSinglePageArchEnabled = true;
}

jvc.getTemplate = function getTemplate(template) {
	if(jvc.isSinglePageArchEnabled === true) {
		return jvc;
	}
	return jvc.getTemplateFromUrl(template);
}

jvc.getTemplateFromPage  = function getTemplateFromPage() {
	// todo
}

jvc.getTemplateFromUrl = function getTemplateFromUrl(templateUrl) {
	_http.get(templateUrl).end(function(err, res){
		// todo - bind html
		return jvc;
	});;
}

jvc.generate = function(param1, param2) {
	// if param2 is not an object. its a single binding
	// if it is...then we're binding multiple files together. and it will be for my case
	


}
// modHTML is responsible for grabbing the html
// files together and returning a K/V store
// to represent the file inrelation to the HTML tag
