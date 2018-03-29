const mongoose = require('mongoose');
const validator = require("email-validator");


const FileSchema = new mongoose.Schema({
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
  
    confirmEmail: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    
    deleted: {
      type: Boolean, 
      default: false},
    });

// validator.validate('email');

// FileSchema.pre('save', function(validateEmail) {
//   if(this.email === true) {
//       next(new Error('Email is invalid'));
//       return;
//     }

//   // next();
// });

  const File = mongoose.model('File', FileSchema);
  
  File.count({}, function(err, count) {
    if (err) {
      throw err;
    }
    
    if (count > 0) return ;
  
    const files = require('./file.seed.json');
    File.create(files, function(err, newFiles) {
      if (err) {
        throw err;
      }
      console.log("Database seeded")
    });
  
  });
  
  module.exports = File;