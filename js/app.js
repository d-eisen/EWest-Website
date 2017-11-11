//This is the project workfile used when completing the course on Treehouse

//Problem: Hints shown even when form is valid
//Solution: hide and show them at approprite times
var $email = $("#email");
var $confirmEmail = $("#confirm_email");

//Hide hints
$("form span").hide();




function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
  console.log;
}

function isEmailValid () {
  return $email.val().length > 8;
}

function areEmailsMatching () {
  return $email.val() === $confirmEmail.val(); 
}

function canSubmit() {
  return isEmailValid() && areEmailsMatching();
}

function emailEvent() {
  //Find out if email is valid
  if($email.val().length > 8) {
     //Hide hint if match
    $email.next().hide();  
  } else {
    //else show hint
    $email.next().show();
  }
}

function confirmEmailEvent() {
  //Find out if email and confirmation match
  if(areEmmailsMatching()) {
      //Hide hint if match
    $confirmEmail.next().hide();
  } else {
      //Else show hint
    $confirmEmail.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit ())
}

//When event happens on email input
$email.focus(emailEvent).keyup(emailEvent).keyup(confirmEmailEvent).keyup(enableSubmitEvent);
   
//When event happens on confirmation input
$confirmEmail.focus(confirmEmailEvent).keyup(confirmEmailEvent).keyup(enableSubmitEvent);

 enableSubmitEvent();