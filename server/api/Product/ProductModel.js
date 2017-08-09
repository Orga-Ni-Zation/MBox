const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ProductSchema = new Schema({
	name: String,
	imageUrl: {
		type: String,
		default: "https://s-media-cache-ak0.pinimg.com/originals/c0/c0/db/c0c0dbcc7433a245360cac8e071cce61.jpg"
	},
	imageName: String,
	description: String,
	category:{
		type: Array,
		enum: ["technology", "accesory", "toy", "sport", "kitchen", "pet", "gamer", "antiques", 'fashion']
	},
	gender: {
    type: String,
   enum: ["male", "female", "both"],
    default: "both"
  },
	price: Number,
	priceCategory: {
		type: String,
	 enum: ["low","medium","high"]
	},
}, {
	timestamps: {
		createdAt: "created_at",
		updatedAt: "updated_at"
	}
});
ProductSchema.set('toJSON', { virtuals: true });
ProductSchema.virtual('imageURL').get(function() {
  if(this.imageUrl.includes('http')){
    return this.image;
  }
  return `http://localhost:3000${this.imageUrl}`;
});

module.exports = mongoose.model('Product', ProductSchema);
