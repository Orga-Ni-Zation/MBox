const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const GiftBoxSchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref :'User'},
	productsID: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },{type: Schema.Types.ObjectId,
		ref: 'Product'
	},{type: Schema.Types.ObjectId,
		ref: 'Product'
}],
	address : { type: String },
	delivery: { type: Date},
	recieve :  { type: String}
}, {
timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}
});

module.exports = mongoose.model('GiftBox', GiftBoxSchema);
