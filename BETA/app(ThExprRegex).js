// Plan
// Enable to the form to CREATE a new record via submit function and POST to database 
// The submit form currently uses this method
// Use REGEX to validate email
// Using the GET method, include a URL to call all records
// Allow inputs from the form to update the list via PUT (?)
// Include button to allow user to DELETE the entire list

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const app = express();

// Use Parser and Set View Engine
app.use(bodyParser.urlencoded({ extended: false})) 
app.use(cookieParser());

app.set('view engine', 'pug');

// Import the route handlers
const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

// Call the routers into the app
app.use(mainRoutes);
app.use('/cards', cardRoutes);

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

app.listen(3000, () =>{
    console.log('The application is running on localhost:3000!')
}); 





//===================================
//Validate Email address with RegEx
//===================================

function validateEmail($email){
    let emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    let valid = emailReg.test(email);

    if(!valid) {
        return false;
    } else {
        return true;
    }
}
