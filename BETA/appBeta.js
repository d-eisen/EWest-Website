// Call form in the GET request
// Enable to the form to CREATE a new record via submit function and POST to database 
// Use REGEX to validate email
// Create a list of all visitors
// Include button to allow user to DELETE records

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const mongo = require('mongo');
const mongoose = require('mongoose');
const app = express();

// Use Parser and Set View Engine
// Using Mongo Db may allow you skip the two items below. Instead outputting to cookies the form will output to JSON to be ready by Mongo and Mongoose
app.use(bodyParser.urlencoded({ extended: false})) 
app.use(cookieParser());

app.set('view engine', 'pug');
 
// Import the route handlers
const mainRoutes = require('./src/routes');
const cardRoutes = require('./src/routes/visitor');

// Call the routers into the app
app.use(mainRoutes);
// app.use('/visitor', visitorRoutes);

// Other Middleware
app.use((req, res, next) =>{
    console.log('Hello')
    next();
});




app.use((req, res, next) =>{
    console.log('World')
    next();
});

// app.use((req, res, next) =>{
//     // This snippet is an example of passing a string from this function to the next using a variable and 'next'
//     // req.message = 'This message made it!';
//     next();
// });


// app.use((req, res, next) =>{
//     // The line below calls the string from above
//     // console.log (req.message);
//     next();
// });

app.use((req, res,  next) => {
    // the next line is an example of the JS native error function
    const err = new Error ('Not Found');
    err.status = 404;
    next(err);
});

// Error Handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error'); 
});

app.listen(3030, () =>{
    console.log('The application is running on localhost:3030!')
}); 


