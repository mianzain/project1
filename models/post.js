var mongoose = require("mongoose");
var schema = mongoose.Schema;

var commentSchema = new schema({
	name: {
		type: String, 
		validate: [function(name) {
		return name.length >=2;
	},
	'name is to small'
	]

	},



		
	comments: String
});

var publishSchema = new schema ({
 
 platingAPIId: { type: String, unique: true }, // will prevent multiple occurences of foods with same recipe ID
 // searchTerm: String, // if you specify the searchTerm that is used to find the food, you can specify it in the find() call
 name: String, 
 comments : [commentSchema],
 image_url: String,
 f2f_url: String,
 tag: String

});

// fix naming conventions
var publish = mongoose.model('publish', publishSchema);
module.exports = publish;