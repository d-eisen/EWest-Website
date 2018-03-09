// Plan
// Enable to the form to CREATE a new record via submit function and POST to database 
// The submit form currently uses this method
// Use REGEX to validate email
// Using the GET method, include a URL to call all records
// Allow inputs from the form to update the list via PUT (?)
// Include button to allow user to DELETE the entire list




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
