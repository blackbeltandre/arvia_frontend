/*---------------------------------------------
Template name:  Bitqueen
Version:        1.0
Author:         techydevs
Author Email:   contact@techydevs.com

[Table of Content]

01: Preloader
02: nav-menu
02: Smooth scroll anchor links
03: Mobile Menu Show
04: Mobile Menu Close
05: Panel Open
06: MagnificPopup
07: Back to Top click control
08: When window will be scroll Back to Top  show
----------------------------------------------*/

(function ($) {
    "use strict";


    $(document).on('ready', function () {

        /*==== Preloader ====*/
        $(window).on('load', function(){
            $('#loading-area').delay('500').fadeOut(2000);
        });

        /*==== nav-menu ====*/
        $(document).on('click', 'a.nav-menu', function () {
            $('.main-wrapper nav ul').slideToggle('open');
        });

        /*==== Smooth scroll anchor links ====*/
        $(document).on('click', '.main-menu ul li a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);
        });

        /*==== Mobile Menu Show ====*/
        $(document).on('click', '.menu-trigger', function () {
            $('.navmenu-collapse').addClass('active');
            $('.demo-body-overlay').addClass('active');
        });

        /*==== Mobile Menu Close ====*/
        $(document).on('click', '.menu-close, .demo-body-overlay', function () {
            $('.navmenu-collapse').removeClass('active');
            $('.demo-body-overlay').removeClass('active');
        });

        /*==== Panel Open ====*/
        $(document).on('click', '.panel-open', function () {
            $('.theme-panel').toggleClass('active');
        });

        /*==== MagnificPopup =====*/
        if ($.fn.magnificPopup) {
            $('.video-play-btn').magnificPopup({
                type: 'video'
            });
        }

        /*==== Back to Top click control =====*/
        $(document).on('click','#scroll-top',function () {
            $('html,body').animate({scrollTop:0},500);
        });

        /*==== When window will be scroll Back to Top  show =====*/
        var scrollButton = $('#scroll-top');
        $(window).scroll(function () {
            if($(this).scrollTop()>= 300){
                scrollButton.show();
            }else{
                scrollButton.hide();
            }
        });


    });

})(jQuery);