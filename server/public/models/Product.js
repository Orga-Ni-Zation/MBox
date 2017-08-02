const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: String,
  imageUrl: {
    type: String,
    default: "https://s-media-cache-ak0.pinimg.com/originals/c0/c0/db/c0c0dbcc7433a245360cac8e071cce61.jpg" },
  description: String,
  priceCategory: {
    price: Number,
    type: String,
   enum: ["low","medium","high"]
  },
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
