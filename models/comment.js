const mongoose = require('mongoose');
const commentsSchema = new mongoose.Schema({
  username: String,
  comment: String,
  timestamp: Date,
  VideoId: mongoose.Types.ObjectId,
});

module.exports = mongoose.model('comment', commentsSchema);
