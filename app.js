//Globals
GLOBAL.fs      = require('fs');
GLOBAL._       = require('underscore');
GLOBAL.express = express = require("express");
GLOBAL.app     module.exports = express();
GLOBAL.ejs     = require('ejs');


//Express
app.engine('html', ejs.renderFile);
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 8000;
app.listen(port, function() {
	console.log("Listening on " + port);
});



app.get('/', function(req, res){


	res.render('index.html');
});

app.get('*', function(req, res){
	res.render('oops.html');
})