// -------------------------------------------------------------------
// init.js
//
// This is the last loading script. Initialize jQuery plugins, etc.
// -------------------------------------------------------------------

// fastclick.js
printTitle('fastclick.js');
window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);

// Init mobileMenu + options
$('.mobile-menu').mobileMenu();
