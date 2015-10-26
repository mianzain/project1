var mongoose = require("mongoose");
var schema = mongoose.Schema;
var commentSchema = new schema ({
 // user: type:Schema.types.objectId,ref:'user',
 platingAPIId: String,
 name: String, 
 body : String,
 image_url: String,
 f2f_url: String
});
// fix naming conventions
var comment = mongoose.model('comment', commentSchema);
module.exports = comment;