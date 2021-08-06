/*---------------------------------------------
Template name:  Zobstar
Version:        1.0
Author:         TechyDevs
Author Email:   contact@tecydevs.com

[Table of Content]

01: Preloader
02: side-widget-menu
02: Mobile Menu Open Control
03: Mobile Menu Close Control
04: Side user panel menu Open Control
05: Back to Top Button and Navbar Scrolling Effects
06: back to top button click control
07: most-visited-wrap
08: Client logo slider
09: client-testimonial
10: gallery-carousel
11: magnificpopup
12: Daterangepicker
13: MagnificPopup
14: Quantity number increment control
15: Quantity number decrement control
16: Tooltip
17: Nice Select
18: Counter up
----------------------------------------------*/

(function ($) {
    "use strict"; //use of strict

    /*==== Preloader =====*/
    $(window).on('load', function(){
        $('.loader-container').delay('500').fadeOut(2000);
    });

    $(document).ready( function () {

        /*====  side-widget-menu  =====*/
        $(document).on('click','.side-menu-wrap .side-menu-ul>li>a .btn-toggle', function () {
            $(this).closest('li').siblings().removeClass('active').find('.dropdown-menu-item').slideUp(200);
            $(this).closest('li').toggleClass('active').find('.dropdown-menu-item').slideToggle(200);
            return false;
        });

        /*=========== side-nav-container Menu Open Control ============*/
        $(document).on('click','.logo-right-content .side-menu-open', function () {
            $('.side-nav-container').toggleClass('active');
        });

        /*=========== dashboard-nav-container Menu Open Control ============*/
        $(document).on('click','.dashboard-nav-trigger-btn', function () {
            $('.dashboard-nav-container').addClass('active');
        });

        /*=========== user-nav-container Menu Open Control ============*/
        $(document).on('click','.user-menu-open', function () {
            $('.user-nav-container').addClass('active');
        });

        /*=========== Mobile Menu Close Control ============*/
        $(document).on('click','.humburger-menu .side-menu-close', function () {
            $(".side-nav-container, .dashboard-nav-container, .user-nav-container").removeClass('active');
        });

        $('.skillbar').each(function() {
            $(this).find('.skill-item').animate({ width: $(this).attr('data-percent') }, 3000);
        });

        /*===== Back to Top Button and Navbar Scrolling Effects ======*/
        $(window).on('scroll', function() {
            //header fixed animation and control
            if($(window).scrollTop() > 0) {
                $('.header-menu-wrapper').addClass('header-fixed');
            }else{
                $('.header-menu-wrapper').removeClass('header-fixed');
            }

            //back to top button control
            if ($(window).scrollTop() > 500) {
                $('#back-to-top').addClass('show-back-to-top');
            } else {
                $('#back-to-top').removeClass('show-back-to-top');
            }

        });

        /*===== back to top button click control ======*/
        $(document).on("click", '#back-to-top', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        /*==== card-carousel =====*/
        $('.card-carousel').owlCarousel({
            loop: true,
            items: 2,
            nav: false,
            dots: false,
            autoplay: true,
            smartSpeed: 500,
            margin: 30,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 768 up
                768 : {
                    items: 2
                }
            }
        });

        /*==== Client logo =====*/
        $('.client-logo').owlCarousel({
            loop: true,
            items: 6,
            nav: false,
            dots: false,
            smartSpeed: 700,
            autoplay: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 425 up
                425 : {
                    items: 2
                },
                // breakpoint from 480 up
                480 : {
                    items: 2
                },
                // breakpoint from 767 up
                767 : {
                    items: 4
                },
                // breakpoint from 992 up
                992 : {
                    items: 6
                }
            }
        });

        /*==== testimonial-carousel =====*/
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            items: 3,
            nav: false,
            dots: true,
            smartSpeed: 700,
            autoplay: false,
            margin: 30,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 768 up
                768 : {
                    items: 2
                },
                // breakpoint from 992 up
                992 : {
                    items: 3
                }
            }
        });

        /*==== testimonial-carousel-2 =====*/
        $('.testimonial-carousel-2').owlCarousel({
            loop: true,
            items: 5,
            nav: false,
            dots: true,
            smartSpeed: 700,
            autoplay: false,
            margin: 30,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 480 up
                576 : {
                    items: 2
                },
                // breakpoint from 991 up
                991 : {
                    items: 3
                },
                // breakpoint from 992 up
                992 : {
                    items: 4
                },
                // breakpoint from 1200 up
                1200 : {
                    items: 5
                }
            }
        });


        /*==== gallery-carousel =====*/
        $('.gallery-carousel').owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            dots: true,
            smartSpeed: 700,
            autoplay: false,
            dotsData: true,
            navText: ["<span class=\"la la-chevron-left\"></span>", "<span class=\"la la-chevron-right\"></span>"]
        });

        /*==== magnificpopup =====*/
        $('.video-popup-btn').magnificPopup({
            type: 'video'
        });

        /*==== Daterangepicker =====*/
        $('input[name="daterange"]').daterangepicker({
            opens: 'right',
            singleDatePicker: true
        });

        /*==== Quantity number increment control =====*/
        $(document).on('click', '.input-number-increment', function() {
            var $input = $(this).parents('.input-number-group').find('.input-number');
            var val = parseInt($input.val(), 10);
            $input.val(val + 1);

        });

        /*==== Quantity number decrement control =====*/
        $(document).on('click', '.input-number-decrement', function() {
            var $input = $(this).parents('.input-number-group').find('.input-number');
            var val = parseInt($input.val(), 10);
            $input.val(val - 1);
        });

        /*==== select2 =====*/
        $('.location-option-field').select2({
            placeholder: "Location",
            allowClear: true
        });

        $('.category-option-field').select2({
            placeholder: "Select category",
            allowClear: true
        });

        $('.job-type-option-field').select2({
            placeholder: "Select Job Type",
            allowClear: true
        });

        $('.experience-option-field').select2({
            placeholder: "Choose experience",
            allowClear: true
        });

        $('.qualification-option-field').select2({
            placeholder: "Choose qualification",
            allowClear: true
        });

        $('.choose-gender-option-field').select2({
            placeholder: "Gender",
            allowClear: true
        });

        $('.job-category-option-field').select2({
            placeholder: "Choose One",
            allowClear: true
        });

        $(".tag-option-field").select2({
            tags: true,
            placeholder: "e.g. PHP, responsibilites",
            tokenSeparators: [',', ' ']
        });

        $(".location-tag-option-field").select2({
            tags: true,
            placeholder: "e.g. Australia",
            tokenSeparators: [',', ' ']
        });

        $(".experience-tag-option-field").select2({
            tags: true,
            placeholder: "e.g. 3 Years",
            tokenSeparators: [',', ' ']
        });

        $(".qualification-tag-option-field").select2({
            tags: true,
            placeholder: "e.g. Graduate",
            tokenSeparators: [',', ' ']
        });

        $(".gender-tag-option-field").select2({
            tags: true,
            placeholder: "e.g. Male",
            tokenSeparators: [',', ' ']
        });

        $(".search-tag-option-field").select2({
            tags: true,
            placeholder: "Please select",
            tokenSeparators: [',', ' ']
        });

        $(".city-tag-option-field").select2({
            tags: true,
            placeholder: "Select a city",
            tokenSeparators: [',', ' ']
        });
        $(".current-salary-tag-option-field").select2({
            tags: true,
            placeholder: "Current salary",
            tokenSeparators: [',', ' ']
        });
        $(".expected-salary-tag-option-field").select2({
            tags: true,
            placeholder: "Expected salary",
            tokenSeparators: [',', ' ']
        });
        $(".languages-tag-option-field").select2({
            tags: true,
            placeholder: "Select languages",
            tokenSeparators: [',', ' ']
        });

        $(".skill-option-field").select2({
            tags: true,
            placeholder: "Skill requirements",
            tokenSeparators: [',', ' ']
        });
        $(".business-tag-option-field").select2({
            placeholder: "Select business type",
            allowClear: true
        });

        $(".short-option-field").select2({
            placeholder: "Short by",
            allowClear: true
        });

        $(".reason-option-field").select2({
            placeholder: "Reason for contact",
            allowClear: true
        });

        $(".industry-option-field").select2({
            placeholder: "Select industry",
            allowClear: true
        });


        /*====  Tooltip =====*/
        $('[data-toggle="tooltip"]').tooltip({});

        /*======= ui price range slider ========*/
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 50, 290 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );


        //filer_input
        $('#filer_input, #filer_input-2').filer({
            limit: 10,
            maxSize: 100,
            showThumbs: true
        });

        /*==== team-carousel =====*/
        $('.team-carousel').owlCarousel({
            loop: true,
            items: 3,
            nav: true,
            dots: true,
            smartSpeed: 500,
            autoplay: false,
            margin: 30,
            navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 768 up
                768 : {
                    items: 2
                },
                // breakpoint from 991 up
                991: {
                    items: 2
                },
                // breakpoint from 992 up
                992: {
                    items: 3
                }
            }
        });

        /*==== popular-job-carousel =====*/
        $('.popular-job-carousel').owlCarousel({
            loop: true,
            items: 1,
            nav: false,
            dots: false,
            autoplay: true
        });

        //Bootstrap dropdown-toggle
        $('.dropdown-toggle').dropdown();

        /*=========== circlechart ============*/
        $('.circlechart').circlechart();

        /*=========== Google map ============*/
        if($("#map").length) {
            initMap('map', 40.717499, -74.044113, 'images/map-marker.png');
        }

    });

})(jQuery);

