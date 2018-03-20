const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET /register
router.get('/register', function(req, res, next) {
  return res.render('register', { title: 'Sign Up' });
});

// POST /register
router.post('/register', function(req, res, next) {
  if (req.body.email &&
    req.body.name &&
    req.body.confirmEmail) {

      // confirm that user typed same password twice
      if (req.body.password !== req.body.confirmEmail) {
        let err = new Error('Email addresses do not match.');
        err.status = 400;
        return next(err);
      }

      // create object with form input
      let userData = {
        email: req.body.email,
        name: req.body.name,
      };

      // use schema's `create` method to insert document into Mongo
      User.create(userData, function (error, user) {
        if (error) {
          return next(error);
        } else {
          return res.redirect('/profile');  //Find profile route
        }
      });
      
    } else {
      let err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
})

//Modify this area to reflect pages in our app
// GET /
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Home' });
});

// GET /about
router.get('/about', function(req, res, next) {
  return res.render('about', { title: 'About' });
});

// GET /contact
router.get('/contact', function(req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

module.exports = router;
