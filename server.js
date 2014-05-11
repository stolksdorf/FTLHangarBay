//Globals
var fs      = require('fs');
var _       = require('underscore');
var express = express = require("express");
var app     = module.exports = express();
var ejs     = require('ejs');


//Express
app.engine('html', ejs.renderFile);
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');

app.use("/static", express.static(__dirname + "/static"));


var port = process.env.PORT || 8000;


app.get('/', function(req, res){
	res.render('ftlhb.html');
});


//Load API
var api ={
	augments   : JSON.parse(fs.readFileSync('./api/augments.json', 'utf8')),
	drones     : JSON.parse(fs.readFileSync('./api/drones.json', 'utf8')),
	layouts    : JSON.parse(fs.readFileSync('./api/layouts.json', 'utf8')),
	races      : JSON.parse(fs.readFileSync('./api/races.json', 'utf8')),
	ships      : JSON.parse(fs.readFileSync('./api/ships.json', 'utf8')),
	subsystems : JSON.parse(fs.readFileSync('./api/subsystems.json', 'utf8')),
	systems    : JSON.parse(fs.readFileSync('./api/systems.json', 'utf8')),
	weapons    : JSON.parse(fs.readFileSync('./api/weapons.json', 'utf8'))
};

var api_help = fs.readFileSync('./api/help.txt', 'utf8');


app.get('/api', function(req, res){
	res.send(api_help);
});

app.get('/api/*', function(req, res){
	var result = _.reduce(req.params[0].split('/'), function(result, val){
		if(!result) return undefined;
		return result[val];
	},api)
	if(!result){
		res.send(404, "API endpoint not found.");
	}
	res.json(result);
})



module.exports = {
	start : function(){
		app.listen(port, function() {
			console.log("Listening on " + port);
		});
	}
}