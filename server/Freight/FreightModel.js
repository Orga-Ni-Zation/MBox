var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var FreightSchema = new Schema({
	'userID' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'giftBoxID' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'GiftBox'
	},
	'receiverName' : String,
	'address' : String,
	'date' : Date,
	'membership' : Boolean
});

module.exports = mongoose.model('Freight', FreightSchema);
