const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  content: String,
  visible: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Page', pageSchema);
