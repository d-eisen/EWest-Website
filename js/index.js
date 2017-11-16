//===================================
//JS FOR HAMBURGER
//===================================


$('.menu-toggle').on("click", function() {
//  console.log("CLICK")

  $('ul').toggleClass('opening');
  $(this).toggleClass('open');

})
