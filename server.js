//Globals
var fs      = require('fs');
var _       = require('underscore');
var express = express = require("express");
var app     = module.exports = express();
var ejs = require('ejs');




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


var api = require('./api/api');
app.get('/api', function(req, res){
	res.setHeader("Content-Type", "application/json");
	res.send(api.help);
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
});




var stats = require('./stats')
app.get('/shipcost', function(req, res){
	res.json(stats.all_ship_cost(api));
});


//cool suchkjhkjhkjhkjhjhkjhkjhkjhkjhkjhkjhkjhkjkjhkjh


app.get('/stealth_d', function(req, res){
	var test = _.reduce(stats.all_ship_cost(api), function(result, ship_data, ship_id){
		return result + ship_id + " " + ship_data.total + '\n';
	},"")
	res.send(test);
});

var server ={};
server = {
	instance : undefined,
	start : function(){
		server.instance = app.listen(port, function() {
			console.log("Listening on " + port);
		});
		return server;
	},
	stop2 : function(callback){
		if(server.instance){
			//server.instance.kill( 'SIGTERM' );
			console.log('closing');
			return server.instance.close(function(){
				callback && callback();
				console.log('calalalalal');
			});
		}
		callback && callback();
		return server;
	},
	restart : function(){
		var self = server;
		server.stop2(function(){
			self.start();
		})
		return server;
	},
};

console.log('RELOADED');

module.exports = server;

