const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// GET Sign up form /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Empower West Contact Module' });
});

// /* GET users listing. */
// router.get('/users', function(req, res, next) {
//   res.send('respond with a resource');
// });

//Get a list of all files in the DB//
router.get('/file.model', function(req, res, next) {
  const fileModel = mongoose.model('file.model.');

  fileModel.find({deleted: {$ne: true}}, function(err, files) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  
    res.json(files);
  });
});

// GET Confirmation Page /
// router.get('/confirm', function(req, res, next) {
//   return res.render('confirm', { title: 'Confirmation' });
// });

/**
 * Get a single file by passing its id as a URL param
 */
// router.get('/file/:fileId', function(req, res, next) {
//   const {fileId} = req.params;
//   // same as 'const fileId = req.params.fileId'

//   const file = FILES.find(entry => entry.id === fileId);
//   if (!file) {
//     return res.status(404).end(`Could not find file '${fileId}'`);
//   }

//   res.json(file);
// });


// Create a new file using POST / Sign up form

router.post('/', function(req, res, next) {
  const File = mongoose.model('File');
  const fileData = {
    name: req.body.name,
    email: req.body.email,
    confirmEmail: req.body.email,
  };

  File.create(fileData, function(err, newFile) {
    console.log(req.body);
    if (req.body.email &&
      req.body.name &&
      req.body.confirmEmail) 
    {
      // confirm that user typed same email twice
      if (req.body.email !== req.body.confirmEmail) {
        const err = new Error('Email addresses do not match.');
        err.status = 400;
        return next(err)
      }  else {

        res.json(newFile);
      }
    }   else {
      const err = new Error('Fields missing data.');
      err.status = 400;
      return next(err)

    }
  });

      // use schema's `create` method to insert document into Mongo
      // User.create(userData, function (error, user) {
      //   if (error) {
      //     return next(error);
      //   } else {
      //     return res.redirect('/confirm');  //Redirects to 'confirm' route
      //   }
      // });
      
//     } else {
//       let err = new Error('All fields required.');
//       err.status = 400;
//       return next(err);
//     }
// })
});

// ADD UPDATE AND DELETE METHODS HERES

module.exports = router;
