const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({
  VideoId: mongoose.Types.ObjectId,
  LinkProduct: String,
  Title: String,
  Price: Number,
});

module.exports = mongoose.model('product', productsSchema);
