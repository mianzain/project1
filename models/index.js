var mongoose = require('mongoose');


mongoose.connect(
	process.env.MONGOLAB_URI ||
  	process.env.MONGOHQ_URL ||
	'mongodb://localhost/foodish');

// var db =mongoose.connection;
// // db.on('error', console,error.bind(console,'connection error;'));
// // db.once('open',function(callback){
// console.log('db is open for business');

// });

module.exports.Post = require('./post.js');
// module.exports.Post = require('./comments.js');