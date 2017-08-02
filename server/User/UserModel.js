var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
	'name' : String,
	'lastName' : String,
	'birthday' : Date,
	'username' : String,
	'password' : String,
	'email' : String,
	'gender' : Array,
	'membership' : Array
});

module.exports = mongoose.model('User', UserSchema);
