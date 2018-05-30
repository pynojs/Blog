var mongoose = require('mongoose');
var commentSchema = new mongoose.Schema({
	comment: String
});
module.exports = mongoose.model('comment',commentSchema);