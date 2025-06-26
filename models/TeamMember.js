const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: String,
  photo: String,
  bio: String,
  socialLinks: {
    linkedin: String,
    twitter: String,
    email: String
  }
}, { timestamps: true });

module.exports = mongoose.model('TeamMember', teamMemberSchema);
