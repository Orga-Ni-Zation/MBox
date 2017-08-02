const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema({
	name: String,
  lastName: String,
  birthday: Date,
  username: String,
  password: String,
  email: String,
  gender: {
    type: String,
   enum: ["male", "female", "unknown"],
    default: "unknown"
  },
  membership: {
    type: String,
    enum: ['single',
           'monthly'],

  },
  role: {
    type: String,
    enum: [
      'admin',
      'user',
    ],
    default: "user"
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('User', UserSchema);
