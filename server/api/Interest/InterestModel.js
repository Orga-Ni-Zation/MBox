var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var InterestSchema = new Schema({
	interests: {
		type: String,
		categories: [{
			mobile: ['iphone6', 'iphone5', 'android']
		}, {
			pets: ["dog", 'cat', 'bird']
	},{
		male: ['sunglass', 'wallet', 'watch', 'bracelet']
	},{
		female: ['sunglass', 'wallet', 'watch', 'bracelet']
	}, {
		sport: ['accesory']
	}]
	},
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}
});

module.exports = mongoose.model('Interest', InterestSchema);
