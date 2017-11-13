
//Problem: Contact information form needs email format verification
//Solution: Use Regex to validate email address
var $email = $("email");
var $confirmEmail = $("confirm_email");

//Hide hints
//$("form span").hide();

function validateEmail($email){
    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var valid = emailReg.test(email);

    if(!valid) {
        return false;
    } else {
        return true;
    }
}

function confirmEmailEvent() {
    //find out if password and confirmation match
    if($email.val() === $confirmEmail.val()) {
    //hide hint if matched
        $confirmEmail.next().hide();
    } else {
   //else show hint  
        $confirmEmail.next().show();
    }
}
 //when event happens on submit
$email.focus(emailEvent).keyup(emailEvent).focus(confirmEmailEvent).keyup(confirmEmailEvent);

 //when event happenson confirmation input