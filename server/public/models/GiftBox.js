const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftBoxSchema = new Schema({
  productID: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
}, {
timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}
});


const GiftBox = mongoose.model('GiftBox', giftBoxSchema);
module.exports = GiftBox;
