const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TYPES = require('./interest-types');

const UserSchema = new Schema({
	username: String,
  lastName: String,
  password: String,
  email: String,
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
	type: Array, enum: TYPES, default: TYPES
	}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('User', UserSchema);
