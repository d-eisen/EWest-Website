


//JS FOR HAMBURGER
//console.log('Hello')
//console.log($(".menu-toggle"))

$('.menu-toggle').on("click", function() {
//  console.log("CLICK")

  $('ul').toggleClass('opening');
  $(this).toggleClass('open');

})
