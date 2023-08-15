const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({
  username: String,
  password: String,
  urlPhotoProfile: Date,
});

module.exports = mongoose.model('account', accountSchema);
