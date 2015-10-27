// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
app = express(),
path = require("path"),
bodyParser = require("body-parser");
db = require("./models/index.js");

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
	res.render('index1');
});

app.post('/index', function(req, res) {
	//console.log("search storage: ", req.body)
	request('http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q='+ req.body.storage, function (error, response, body) {
		//console.log('the response from the api is  ', response )
		if (!error && response.statusCode == 200) {
	    // This API sends the data as a string so we need to parse it. This is not typical.
	    foods = JSON.parse(response.body);
	    console.log('foods from post', foods);
	    // save API data in DB
	    // for each recipes in the JSON
	    foods.recipes.forEach(function(recipe) {
	    	// create a post in the database
		    db.Post.create({
		    	platingAPIId: recipe.recipe_id,
		    	name: recipe.title,
		    	image_url: recipe.image_url,
		    	f2f_url: recipe.f2f_url
		    }, function(err, post) {
		    	// console.log the created object
		    	console.log("created new post: ", post);
		    });
		});
	    	// res.render('index', {foods: foods});
	    	res.redirect('/results');
	    } else {
	    	console.log("error");
	    }
	});
});

app.get('/results', function (req, res){
	db.Post.find({}, function (err, foods){
		console.log(' the foods contain :', foods);
		res.render('index', {foods: foods });
	});
});

app.post('/api/foods/:id/comments', function(req, res) {
	console.log("FOUND ROUTE");
	console.log(req.params.id);
	var comment = req.body;
	db.Post.findById(req.params.id, function(err, post) {
		post.comments.push(comment);
		post.save();
		res.json(post);
	});

	// var publish = new db.publish(req.body);
	// // var id= req.params.id
	// console.log("publish is: ", publish);
 //    // find by id, using params from the route

	// db.post.findById(req.params._id, function(err, post) {
	//   	if (err) { res.json(err);}
	//     // add the comment to the comments
	//     index.publish.push(publish);
	//     // save the post
	//     post.save();
	//     console.log("comment is: ", publish);
	//     console.log("comments are: ", publish.publishs);
	//     // send the comment we made back to the client to append to the page
	//     res.json(publish);
	// });
});






app.listen(3000, function (){
	console.log("listening on port 3000");
});