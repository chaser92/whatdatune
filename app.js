var express = require("express");
var multer = require("multer");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.set('views', path.join(__dirname, 'views'));

app.use(multer({ dest: "./waves/waves" }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type: "application/json", limit: '50mb'}));
require("./routes")(app);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "bower_components")));
app.use(express.static(path.join(__dirname, "waves")));

app.use(function(req, res) {
	        res.writeHead('404');
		res.end("Resource not found");
});
app.listen(5000, function() {
	        console.log("Server ready on port 5000");
});

