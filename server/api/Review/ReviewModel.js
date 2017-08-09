const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ReviewSchema = new Schema({
	title: String,
  review: String,
  stars: Number,
	imageUrl: {String, default: ''},
	imageName: String,
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
	ReviewSchema.set('toJSON', { virtuals: true });
	ReviewSchema.virtual('imageURL').get(function() {
	  if(this.imageUrl.includes('http')){
	    return this.image;
	  }
	  return `http://localhost:3000${this.imageUrl}`;
	});

module.exports = mongoose.model('Review', ReviewSchema);
