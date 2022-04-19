$(document).ready(function(){
   $('.intro__slider').slick({
      slidesToShow: 3,
      adaptiveHeight: true,
      centerMode: true,
      initialSlide: 1,
      variableWidth: false,
      speed: 600,
      autoplay: true,
      responsive:[
         {
            breakpoint: 768,
            settings: {
               variableWidth: true,
            }
         }
      ]
   });
   $('.follow__slider').slick({
      slidesToShow: 3,
      adaptiveHeight: true,
      dots: true,
      centerMode: true,
      variableWidth: false,
      speed: 600,
      autoplay: true,
      responsive:[
         {
            breakpoint: 1276,
            settings: {
               variableWidth: true,
            }
         }
      ]
   });
   $('.menu__btn').click(function() {
      $('.menu-collapse').addClass('active')
      $('.wrapper').addClass('active')
   });
   $('.menu-collapse__close').click(function() {
      $('.menu-collapse').removeClass('active')
      $('.wrapper').removeClass('active')
   });
   $(document).keyup(function(e) {
      if (e.key === "Escape" || e.keyCode === 27) {
         $('.menu-collapse').removeClass('active')
         $('.wrapper').removeClass('active')
      }
   });
});
