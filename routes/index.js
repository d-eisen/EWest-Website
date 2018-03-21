const express = require('express');
const router = express.Router();

// GET Sign up form /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Empower West Contact Module' });
});

// GET Confirmation Page /
router.get('/confirm', function(req, res, next) {
  return res.render('confirm', { title: 'Confirmation' });
});

// POST / Sign up form
router.post('/index', function(req, res, next) {
  if (req.body.email &&
    req.body.name &&
    req.body.confirmEmail) {

      // confirm that user typed same email twice
      if (req.body.email !== req.body.confirmEmail) {
        let err = new Error('Email addresses do not match.');
        err.status = 400;
        return next(err);
      }

      // create object with form input
      let userData = {
        name: req.body.name,
        email: req.body.email,
      };

      // use schema's `create` method to insert document into Mongo
      User.create(userData, function (error, user) {
        if (error) {
          return next(error);
        } else {
          return res.redirect('/confirm');  //Redirects to 'confirm' route
        }
      });
      
    } else {
      let err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
})
module.exports = router;
