const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TYPES = require('./interest-types');

const UserSchema = new Schema({
	username: String,
  lastName: String,
  password: String,
  email: String,
	birthday: Date,
	country:String,
	address:String,
	imageUrl: {type: String, default:''},
	imageName: String,
	phone:String,
  gender: {
    type: String,
   enum: ["male", "female", "unknown"],
    default: "unknown"
  },
  role: {
    type: String,
    enum: [
      'admin',
      'user',
    ],
    default: "user"
  },
	interests : {
	type: Array, enum: TYPES,
	}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
UserSchema.set('toJSON', { virtuals: true });
UserSchema.virtual('imageURL').get(function() {
  if(this.imageUrl.includes('http')){
    return this.imageUrl;
  }
  return `http://localhost:3000${this.imageUrl}`;
});

module.exports = mongoose.model('User', UserSchema);
