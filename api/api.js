var fs = require('fs');
var _ = require('underscore');

var endpoints = ["augments", "drones", "layouts", "races", "ships", "subsystems", "systems", "weapons", "help"];
module.exports = _.reduce(endpoints, function(result, endpoint){
	result[endpoint] = JSON.parse(fs.readFileSync('./api/' + endpoint + '.json', 'utf8'));
	return result;
}, {});