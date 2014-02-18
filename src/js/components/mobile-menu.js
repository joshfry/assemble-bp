// ------------------------------------------------------------
// Mobile Menu
// ------------------------------------------------------------

printTitle('mobile-menu.js');

(function ($) {
  $.fn.mobileMenu = function(options) {
    options = $.extend({}, $.fn.mobileMenu.options, options);
    return this.each(function() {

      // mobileMenu vars
      var elem = $(this),

          // Set default options
          toggleElem = options.toggleElem,
          toggleClass = options.toggleClass;

      // mobileMenu code
      elem.click(function(){
        $(toggleElem).toggleClass(toggleClass);
      });

    });
  };

  // mobileMenu default options
  $.fn.mobileMenu.options = {
    toggleElem: 'body',
    toggleClass: 'menu-active'
  };

})(jQuery);
