const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const GiftBoxSchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref :'User'},
	productsID: [{type: Schema.Types.ObjectId, ref :'Product'}],
	recieve :  { type: String},
	address : { type: String },
	delivery : { type: Date},
	type : {type: String, enum: ['own', 'gift'], default: 'own'},
	status : {type: String,
		enum: ['in proccess', 'order accepted', 'creating product', 'preparing shipment', 'shipped', 'completed' ],
		default: 'in proccess'},
}, {
timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}
});


module.exports = mongoose.model('GiftBox', GiftBoxSchema);
