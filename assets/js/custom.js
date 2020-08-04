var $window = $(window);
var $root = $('html, body');

$(function(){
	// Animate with Scroll
	new WOW().init();
});

$(document).ready(function(){

   

  // $('.header .navbar-nav a').on('click', function(event) {
  //   var $anchor = $(this);
  //   $root.stop().animate({
  //       scrollTop: $($anchor.attr('href')).offset().top - 60
  //   }, 1500, 'easeInOutQuart');
  //   event.preventDefault();
  //   $(".navbar-collapse").collapse('hide');
  // });

 

  $('.main_menu_ul .nav-item .nav-link').click(function(){
    $('.main_menu_ul .nav-item .nav-link').removeClass('active');
    $(this).addClass('active');
  })


  // $("#menu > li a").on("click" , function () {
  //   $("#main > section.active, #menu > li a").removeClass("active");
  //   $(this).addClass('active');
  //   var $id = $(this).attr('href');
  //   $('#main').children($id).addClass('active');
  // });

  var scroll = $window.scrollTop();
    var skillsDiv = $('#skills');
    if(skillsDiv.length > 0){
        var winH = $window.height(),
            skillsT = skillsDiv.offset().top;
        if (scroll + winH > skillsT) {
            $('.skillbar').each(function () {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 6000);
            });
        }
    }
  
})

$window.on('scroll', function () {
 
    if ($window.scrollTop() > 100) {
        $('#header').addClass('header-sticky');
      
    } else {
        $('#header').removeClass('header-sticky');
        
    }
  
});

$(function () {

  $("a.smooth-scroll").click(function (event) {

      event.preventDefault();

      // get/return id like #about, #work, #team and etc
      var section = $(this).attr("href");

      $('html, body').animate({
          scrollTop: $(section).offset().top - 64
      }, 1250, "easeInOutExpo");
  });
});
