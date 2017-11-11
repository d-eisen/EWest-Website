//<!--
//OLD VERSION OF HAMBURGER JAVASCRIPT
//    <script>
//function myFunction() {
//    var x = document.getElementById("myTopnav");
//    if (x.className === "topnav") {
//        x.className += " responsive";
//    } else {
//        x.className = "topnav";
//    }
//}
//</script>
//-->



//MASONRY JS
//// external js: masonry.pkgd.js
//
//$('.grid').masonry({
//  itemSelector: '.grid-item',
//  columnWidth: 160
//});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
//<script>
//function myFunction() {
//    var x = document.getElementById("myTopnav");
//    if (x.className === "topnav") {
//        x.className += " responsive";
//    } else {
//        x.className = "topnav";
//    }
//}
//</script>

//
//function isEmail(email) {
//  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//  return regex.test(email);
//}


//EMAIL FORM WITH REGEX


var $email = $("#email");
var $confirmEmail = $("#confirm_email");
//hide hints
$("form span").hide();

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

 //when event happens on password input
$email.focus(emailEvent).keyup(emailEvent).focus(confirmEmailEvent).keyup(confirmEmailEvent);

 //when event happenson confirmation input