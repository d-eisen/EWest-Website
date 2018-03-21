// Contact form input

const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  confirmemail: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;