const router = require('express').Router();
const mongoose = require('mongoose');

// CRUDL Routes
// CREATE new file
router.post('/file', function(req, res, next) {
    const File = mongoose.model('File');
    const fileData = {
      name: req.body.name,
      email: req.body.email,
      confirmEmail: req.body.confirmEmail
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
  
  module.exports = router;