var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	name: String,
	password: String,
	birth: String,
	constellation: String,
	tel: Number,
	hometown: String,
	place: String,
	profession: String,
	sign: Number
});
module.exports = mongoose.model('user',userSchema);