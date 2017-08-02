
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  title: String,
  review: String,
  stars: Number,
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  giftBoxID: {
    type: Schema.Types.ObjectId,
    ref: "GiftBox"
  }
  }, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

  const Review = mongoose.model('Review', ReviewSchema);

  module.exports = Review;
