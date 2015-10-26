var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/posts');

// var db =mongoose.connection;
// // db.on('error', console,error.bind(console,'connection error;'));
// // db.once('open',function(callback){
// console.log('db is open for business');

// });

module.exports.Post = require('./post.js');