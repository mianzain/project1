// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");
require('dotenv').load();

var FOOD_API_KEY = process.env.FOOD_API_KEY;
//this should log your secret key!
console.log(FOOD_API_KEY);

var request = require('request');
var foods;

// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	
	res.render('index1', {foods: foods});
});

app.post('/index', function(req, res) {
	//console.log("search storage: ", req.body)
	request('http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q='+ req.body.storage, function (error, response, body) {
		//console.log('the response from the api is  ', response )
	  if (!error && response.statusCode == 200) {
	    // This API sends the data as a string so we need to parse it. This is not typical.
	    foods = JSON.parse(response.body);
	   	console.log('foods from post', foods);
		res.render('index', {foods: foods});

	  }
	});
	});

app.get('/index', function (req, res){
	console.log(' the foods contain :', foods);
	res.render('index', {foods: {recipes: []} });
});




app.listen(3000, function (){
  console.log("listening on port 3000");
});