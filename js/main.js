$(document).ready(function () {


    // Плавный скоролл до якоря
var nav = $('[href ^= "#"]');
nav.on('click', function(event) {
       event.preventDefault();
       var target = $(this).attr('href');
       var top = $(target).offset().top;
       $('html,body').animate({scrollTop: top}, 500)
   });

$('.m_menu').click(function () { 
    $('.m_menu_nav').slideToggle();
    
});

});