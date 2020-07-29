var $window = $(window);
var $root = $('html, body');


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

  // our product carosuel 
  jQuery("#carousel_client").owlCarousel({
    nav: false,
    autoplay: false,
    dots: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    // nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 2
      },
  
      1366: {
        items: 2
        
	      
      }
    },
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
  });

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
