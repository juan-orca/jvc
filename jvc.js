// jvc.js v1.0

// Defaults
var	_http = superagent;
var jvc = {};
jvc.serverRoot = "";
jvc.templates = [];
jvc.isSinglePageArchEnabled = false;

jvc.setServerRoot = function(serverRoot) {
	jvc.serverRoot = serverRoot;
	return jvc;
}

jvc.enableSinglePageArch = function enable() {
	isSinglePageArchEnabled = true;
}

jvc.getTemplate = function getTemplate(template) {
	return jvc.getTemplateFromUrl(template);
}

jvc.getTemplateFromPage  = function getTemplateFromPage() {
	// todo
}

jvc.getTemplateFromUrl = function getTemplateFromUrl(templateUrl, callback) {
	jvc.get(jvc.serverRoot + templateUrl, callback);
}

jvc.get = function(templateUrl, callback) {
	_http.get(templateUrl).end(function(err, res){
		callback(res.body);
		return jvc;
	});;
}

jvc.generate = function(root, bindings) {
	// if param2 is not an object. its a single binding
	$.each(bindings, function(key, value){
		jvc.bind(key,value);
	});
	return jvc;
}

jvc.bind = function bind(src, selector) {
	jvc.getTemplateFromUrl(src,function(template){
		$(selector).load(src);
	})
}

jvc.saveTemplate = function saveNode(html) {
	jvc.templates.push({
		"homepage": html
	});
	return jvc;
}

jvc.render = function () {

}

jvc.router = function() {

}
