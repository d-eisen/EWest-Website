// src/routes/index.js
const router = require('express').Router();
const mongoose = require('mongoose');

// Totally fake data
const FILES = [
  {id: 'a', title: 'cutecat1.jpg', description: 'A cute cat'},
  {id: 'b', title: 'uglycat1.jpg', description: 'Just kidding, all cats are cute'},
  {id: 'c', title: 'total_recall_poster.jpg', description: 'Quaid, start the reactor...'},
  {id: 'd', title: 'louisville_coffee.txt', description: 'Coffee shop ratings'},
];

router.use('/doc', function(req, res, next) {
  res.end(`Documentation http://expressjs.com/`);
});

// LIST all users in the database
router.get('/file', function(req, res, next) {
	const fileModel = mongoose.model('File');

	fileModel.find({deleted: {$ne: true}}, function(err, files) {
		if (err) {
			console.log(err);
			return res.status(500).json(err);
		}
	
		res.json(files);
	});
});

/**
 * Get a single file by passing its id as a URL param
 */
router.get('/file/:fileId', function(req, res, next) {
  const {fileId} = req.params;
  // same as 'const fileId = req.params.fileId'

  const file = FILES.find(entry => entry.id === fileId);
  if (!file) {
    return res.status(404).end(`Could not find file '${fileId}'`);
  }

  res.json(file);
});


// CRUDL Routes
// CREATE new file
router.post('/file', function(req, res, next) {
    const File = mongoose.model('File');
    const fileData = {
      name: req.body.name,
      email: req.body.email,
      confirmEmail: req.body.confirmEmail,
      zipCode: req.body.zipCode,
    };
  
    File.create(fileData, function(err, newFile) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
  
      res.json(newFile);
    });
  });

//UPDATE an existing file
router.put('/file/:fileId', function(req, res, next) {
    const File = mongoose.model('File');
    const fileId = req.params.fileId;
  
    File.findById(fileId, function(err, file) {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }
      if (!file) {
        return res.status(404).json({message: "File not found"});
      }
  
      file.name = req.body.name;
      file.email = req.body.email;
      file.confirmEmail = req.body.confirmEmail;
      file.zipCode = req.body.zipCode;
  
      file.save(function(err, savedFile) {
        if (err) {
          console.error(err);
          return res.status(500).json(err);
        }
        res.json(savedFile);
      })
  
    })
  
  });

//DELETE files
router.delete('/file/:fileId', function(req, res, next) {
  const File = mongoose.model('File');
  const fileId = req.params.fileId;

  File.findById(fileId, function(err, file) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    if (!file) {
      return res.status(404).json({message: "File not found"});
    }

    file.deleted = true;

    file.save(function(err, deletedFile) {
      res.json(deletedFile);
    })

  })
});



  
  module.exports = router;

  