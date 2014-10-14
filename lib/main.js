var simpleStorage = require('sdk/simple-storage');
var data = require('sdk/self').data;
var pageMod = require('sdk/page-mod');

pageMod({
	'include': '*',
	'contentScript': simpleStorage.script
});
