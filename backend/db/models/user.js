const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  createdAt: Date,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
