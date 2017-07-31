const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const freightSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  giftBoxID: {
    type: Schema.Types.ObjectId,
    ref: 'GiftBox'
  },
  receiverName: String,
  address: String,
  date: Date,
  membership: {
    type: Boolean,
    default: false
  }
}, {
timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}
});


const Freight = mongoose.model('Freight', interestSchema);
module.exports = Freight;
