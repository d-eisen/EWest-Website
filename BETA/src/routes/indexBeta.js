const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => {
    
});

// router.get('/contact', (req, res) => {
//     const name = req.cookies.username;
//     if (name) {
//         res.render('index', { name });
//     } else {
//         res.redirect('/hello');
//     }  
// });

// router.get('/hello', (req, res) => {
//     const name = req.cookies.username;
//     if (name) {
//         res.redirect('/');
//     } else {
//         res.render('hello');
//     }      
// });

// POST Requests
// router.post('/hello', (req, res) => {
//     res.cookie('username', req.body.username);
//     res.redirect('/');
// });

// router.post('/goodbye', (req, res) => {
//     res.clearCookie('username');
//     res.redirect('/hello');
// });

// exports the router to be used by app.js
module.exports = router;
