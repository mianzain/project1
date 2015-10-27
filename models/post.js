var mongoose = require("mongoose");
var schema = mongoose.Schema;

var commentSchema = new schema({
	name: String,
	comments: String
});

var publishSchema = new schema ({
 
 platingAPIId: String,
 name: String, 
 comments : [commentSchema],
 image_url: String,
 f2f_url: String
});

// fix naming conventions
var publish = mongoose.model('publish', publishSchema);
module.exports = publish;