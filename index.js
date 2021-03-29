
(function($) {
    'use strict';

    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
		window.location.href = '#'
        $(this).toggleClass('close');
        $('.site-branding').toggleClass('hide');
        $('.site-navigation').toggleClass('show');
        $('.site-header').toggleClass('no-shadow');
		
    });

})(jQuery);
