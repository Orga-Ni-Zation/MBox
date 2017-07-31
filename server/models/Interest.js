const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interestSchema = new Schema({
  interests: {
    type: String,
   enum: ["technology", "sport", "bracelates","pets","romance","movies","fragances","books","rings","collars", "unknown"],
    default: "unknown"
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}
});


const Interests = mongoose.model('Interest', interestSchema);
module.exports = Interests;
