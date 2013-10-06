// ------------------------------------------------------------
// Mobile Menu
   console.log('Component: Mobile Menu');
// ------------------------------------------------------------

var $MenuTrigger = $('.mobile-menu');

$MenuTrigger.click(function(){
  $('body').toggleClass('menu-active');
});
