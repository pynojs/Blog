var mongoose = require('mongoose');
var zanSchema = new mongoose.Schema({
	zanAmount:  Number
});
module.exports = mongoose.model('zan',zanSchema);
