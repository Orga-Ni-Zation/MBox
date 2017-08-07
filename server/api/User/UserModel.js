const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TYPES = require('./interest-types');

const UserSchema = new Schema({
	username: String,
  lastName: String,
  password: String,
  email: String,
 	birthday:Date,
	country: String,
	address:String,
	phone:Number,
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
	interest : {
	type: String, enum: TYPES,
	}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('User', UserSchema);
