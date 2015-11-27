var fs = require('fs');
var _ = require('underscore');

var endpoints = ["augments", "drones", "layouts", "races", "ships", "subsystems", "systems", "weapons"];
module.exports = _.reduce(endpoints, function(result, endpoint){
	result[endpoint] = JSON.parse(fs.readFileSync('./api/' + endpoint + '.json', 'utf8'));
	return result;
}, {
	help : fs.readFileSync('./api/help.txt', 'utf8')
});