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


//JQUERY SCRIPT FOR HAMBURGER
//console.log('Hello')
//console.log($(".menu-toggle"))

$('.menu-toggle').on("click", function() {
  console.log("CLICK")

  $('nav ul').toggleClass('open');

})
