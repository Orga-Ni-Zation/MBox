const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const GiftBoxSchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref :'User'},
	productsID: [{type: Schema.Types.ObjectId, ref :'Product'}],
	recieve :  { type: String},
	address : { type: String },
	delivery : { type: Date},
	type : [{type: String, default: 'own'}],
	status : [{type: String, default: 'in proccess'}],
	imageUrl : { type: String, default: ''},
	imageName: { type: String},

}, {
timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}
});
GiftBoxSchema.set('toJSON', { virtuals: true });
GiftBoxSchema.virtual('imageURL').get(function() {
  if(this.imageUrl.includes('http')){
    return this.image;
  }
  return `http://localhost:3000${this.imageUrl}`;
});

module.exports = mongoose.model('GiftBox', GiftBoxSchema);
