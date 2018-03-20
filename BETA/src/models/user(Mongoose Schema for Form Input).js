// In this form how do I differentiate between the user output of first and last name?

const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;