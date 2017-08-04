const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const GiftBoxSchema = new Schema({
	productsID: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },{type: Schema.Types.ObjectId,
		ref: 'Product'
	},{type: Schema.Types.ObjectId,
		ref: 'Product'
}],
}, {
timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}
});

module.exports = mongoose.model('GiftBox', GiftBoxSchema);
