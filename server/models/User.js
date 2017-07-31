const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastName: String,
  birthday: Date,
  username: String,
  password: String,
  email: String,
  membership: {
    type: String,
    enum: ['single',
           'monthly']
  },
  role: {
    type: String,
    enum: [
      'admin',
      'user',
    ]
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
