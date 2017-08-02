var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var InterestSchema = new Schema({
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

module.exports = mongoose.model('Interest', InterestSchema);
