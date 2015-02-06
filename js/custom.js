$(document).ready(function () {


    //#################### TESTIMONIALS MODULE ############################

    $('.testimonial').each(function (index, el) {
        var back = $(this).closest('.testimonials').data('background');
        var clr = $(this).closest('.testimonials').data('font-color');

        $(this).find('.testimonial_text').append('<div style="border-color:' + back + ' transparent transparent transparent' + '"' + 'class="testimonials_arrow"></div>').css({
            'background': back,
        });;

        $(this).find('p, .testimonial_author a').css({
            'color': clr,
        });

    });

    //#####################################################################

    //#################### TEAM MEMBERS MODULE ############################

    $('.team_member').each(function (index, el) {
        var bot = $(this).find('.member_social').outerHeight();
        $(this).find('.member_social').css('bottom', -bot);
    });

    $(window).resize(function(event) {
        $('.team_member').each(function (index, el) {
        var bot = $(this).find('.member_social').outerHeight();
        $(this).find('.member_social').css('bottom', -bot);
    });
    });

    $(".team_member").hover(function () {
        var bot = $(this).find('.member_social').outerHeight();
        $(this).find('.member_social').animate({
            'bottom': '0px'
        }, 400);
        $(this).find('.team_member_info').animate({
            'bottom': bot
        }, 400);

    }, function () {

        var bot = $(this).find('.member_social').outerHeight();
        $(this).find('.member_social').stop().animate({
            'bottom': -bot
        }, 400);
        $(this).find('.team_member_info').stop().animate({
            'bottom': '0px'
        }, 400);

    });

    //#####################################################################

    //#################### FONT ICONS CUSTOMIZATION ############################

    $("i").each(function (index, el) {

        if ($(this).attr('data-shape') == "circle") {
            var b_rad = '1000px';
        } else {
            if ($(this).attr('data-shape') == "square") {
                var b_rad = '0px';

            }
        }

        var rad = $(this).attr('data-radius');
        var back = $(this).attr('data-background');
        var color = $(this).attr('data-color');
        var back_hov = $(this).attr('data-background-hover');
        var color_hov = $(this).attr('data-color-hover');
        var dur = $(this).attr('data-duration') + "s";
        var sz = $(this).attr('data-size');
        $(this).width(rad * 2).height(rad * 2)
        $(this).css({
            'line-height': rad * 2 + "px",
            'font-size': sz + "px",
            'display': 'inline-block',
            '-webkit-border-radius': b_rad,
            '-moz-border-radius': b_rad,
            '-ms-border-radius': b_rad,
            '-o-border-radius': b_rad,
            'border-radius': b_rad,
            '-o-transition': dur,
            '-ms-transition': dur,
            '-moz-transition': dur,
            '-webkit-transition': dur,
            'transition': dur,
            'text-align': 'center',
            'background': back,
            'color': color
        });

        $(this).hover(function () {
            $(this).css({
                'background': back_hov,
                'color': color_hov
            });
        }, function () {
            $(this).css({
                'background': back,
                'color': color
            });
        });

    });

    //########################################################################

    //########################## PROGRESS BARS ###########################################

    $('.progress_bar').each(function (j) {

        var prog = $(this).attr('data-progress');
        var bck = $(this).attr('data-background');
        var forg = $(this).attr('data-foreground');
        var col = $(this).attr('data-color');
        var title = $(this).attr('data-title');


        $(this).append('<div class="progress_bar_inner">' + title + '</div>');
        $(this).find('.progress_bar_inner').append('<br><span>' + '0%' + '</span>');

    });



    $('.progress_bar').appear({
        force_process: true
    });

    $('.progress_bar').on('appear', function (e, $affected) {

        $affected.each(function (j) {

            var prog = $(this).attr('data-progress');
            var bck = $(this).attr('data-background');
            var forg = $(this).attr('data-foreground');
            var col = $(this).attr('data-color');
            var title = $(this).attr('data-title');


            if ((prog != Math.round(($(this).find('.progress_bar_inner').outerWidth() / $(this).outerWidth()) * 100)) && !$(this).find('.progress_bar_inner').is(':animated')) {

                $(this).css({
                    'background': bck
                });

                $(this).find('.progress_bar_inner').css({
                    'padding-left': 20 + "px",
                    'padding-right': 20 + "px",
                    'background': forg,
                    'color': col,
                    'width': prog + '%',
                    'left': -(prog / 100) * $(this).width()
                });


                $(this).find('.progress_bar_inner').animate({
                    'left': 0 + '%',
                    'opacity': 1
                }, {

                    duration: 2200,
                    easing: 'easeOutSine',
                    step: function (now, fx) {
                        //use the 'now' to calculate percent and update the number
                        $(this).find('span').text(Math.round((($(this).outerWidth() + Math.round($(this).css('left').replace("px", ""))) / $(this).parent().outerWidth()) * 100) + '%');
                    }

                });
            }
        });
    });



    $('.progress_bar_2').each(function (j) {

        var prog = $(this).attr('data-progress');
        var bck = $(this).attr('data-background');
        var forg = $(this).attr('data-foreground');
        var col = $(this).attr('data-color');
        var title = $(this).attr('data-title');


        $(this).append(title + '<div class="progress_bar_back"><div class="progress_bar_inner"></div></div>');
        $(this).find('.progress_bar_inner').append('<span>' + '0%' + '</span>');



    });



    $('.progress_bar_2').appear({
        force_process: true
    });

    $('.progress_bar_2').on('appear', function (e, $affected) {

        $affected.each(function (j) {

            var prog = $(this).attr('data-progress');
            var bck = $(this).attr('data-background');
            var forg = $(this).attr('data-foreground');
            var col = $(this).attr('data-color');
            var title = $(this).attr('data-title');

            if ((prog != Math.round(($(this).find('.progress_bar_inner').outerWidth() / $(this).outerWidth()) * 100)) && !$(this).find('.progress_bar_inner').is(':animated')) {


                $(this).find('.progress_bar_back').css({
                    'background': bck
                });

                $(this).find('.progress_bar_inner').css({
                    'padding-left': 5 + "px",
                    'padding-right': 5 + "px",
                    'background': forg,
                    'color': col,
                    'width': prog + '%',
                    'left': -(prog / 100) * $(this).width()
                });


                $(this).find('.progress_bar_inner').animate({
                    'left': 0 + '%',
                    'opacity': 1
                }, {

                    duration: 2200,
                    easing: 'easeOutSine',
                    step: function (now, fx) {
                        //use the 'now' to calculate percent and update the number
                        $(this).find('span').text(Math.round((($(this).outerWidth() + Math.round($(this).css('left').replace("px", ""))) / $(this).parent().outerWidth()) * 100) + '%');
                    }

                });
            }
        });
    });

    //###############################################################################

    //########################### COUNTERS ####################################################

    $('.counter').each(function (j) {

        var attr = $(this).attr('data-prefix');
        var attr2 = $(this).attr('data-number');

        if (typeof attr !== 'undefined' && attr !== false) {
            var pre = $(this).attr('data-prefix');
        } else {
            var pre = "";
        }

        if (attr2 !== "") {
            var no = '0'
        } else {
            var no = "";
        }




        $(this).prepend('<div class="counter_inner">' + no + '</div><span>' + pre + '</span>');
        $(this).find('.counter_inner').css({
            'font-size': $(this).attr('data-font-size') + "px",
            'color': $(this).attr('data-font-color'),
        });
        $(this).find('span').css({
            'font-size': $(this).attr('data-font-size') + "px",
            'color': $(this).attr('data-font-color'),
        });

    });




    $('.counter').appear({
        force_process: true
    });

    $('.counter').on('appear', function (e, $affected) {

        $affected.each(function (j) {

            var num = $(this).attr('data-number');
            var pre = $(this).attr('data-prefix');

         if (num !== "") {
            $(this).find('.counter_inner').animate({
                countNum: num
            }, {

                duration: 2000,
                easing: 'easeOutSine',
                step: function (now, fx) {
                    $(this).text(Math.round(this.countNum));
                },
                complete: function () {

                }

            });
        }

        });
    });

    //###############################################################################

    //###############################################################################
    $(document).on('click', '.close_box', function () {
        $(this).parent().fadeTo(300, 0, function () {
            $(this).remove();
        });
    });
    //###############################################################################

    //############################## INSTAGRAM #################################################

    if ($('#instafeed').get(0)) {
        var row = ((1 / $('#instafeed').data('row')) * 100);

        var feed1 = new Instafeed({
            get: 'popular',
            limit: $('#instafeed').data('number'),
            target: 'instafeed',
            resolution: 'low_resolution',
            template: '<div' + ' style="width:' + row + '%" ' + 'class="instagram"><a class="animation" href="{{link}}"><img src="{{image}}" /></a></div>',
            clientId: '9ee0fcbb9f8f40768f7172bad70f082a',

        });
        feed1.run();
    }

    if ($('#instafeed2').get(0)) {
        var rows = $('#instafeed2').data('row');
        var pad = 3;
        var row = ((1 / rows) * (100 - ((rows - 1) * pad)));

        var feed2 = new Instafeed({
            get: 'popular',
            limit: $('#instafeed2').data('number'),
            target: 'instafeed2',
            resolution: 'low_resolution',
            template: '<div' + ' style="width:' + row + '%; margin-right:' + pad + "%" + '" ' + 'class="instagram"><a class="animation" href="{{link}}"><img src="{{image}}" /></a></div>',
            clientId: '9ee0fcbb9f8f40768f7172bad70f082a',
            after: function () {
                $("#instafeed2>div").css({
                    'margin-bottom': pad + '%',
                });
                $("#instafeed2>div:nth-child(" + rows + "n+" + rows + ")").css({
                    'margin-right': '0px'
                });;
            }
        });
        feed2.run();
    }
    //##########################################################################################

    //############################### RECENT BLOGS ################################################
    if ($('.recent_blog_posts').get(0)) {
        $('.recent_blog_posts').each(function (index, el) {

            var rows = $(this).data('row');
            var pad = 4;
            var row = ((1 / rows) * (100 - ((rows - 1) * pad)));

            $(this).children().each(function (index, el) {


                $(this).css({
                    'width': row + "%",
                    'margin-right': pad + "%",
                    'margin-bottom': pad + '%',
                });
                $(this).parent().find(":nth-child(" + rows + "n+" + rows + ")").css({
                    'margin-right': '0px'
                });;
            });

            var itms = $(this).children();
            for (var i = 0; i < itms.length; i += rows) {

                itms.slice(i, Math.round(i + rows)).wrapAll("<div class='row'><div class='scgrid-12'></div></div>");
            }

        });
    }
    //########################################################################################


    $('.resp_video').fitVids();


    $(window).scroll(function (event) {
        var scroll = -$(this).scrollTop() * 0.4;

        $('.parallax_section').each(function (index, el) {
            var pos = ($(this).position().top * 0.4) + scroll;
            $(this).css({
                'background-position': 0 + 'px ' + pos + 'px'
            });

        });

    });



    $('.portfolio_item').hover(function () {


        $(this).css({
            'z-index': '5000',
            // '-webkit-transition':'-webkit-transform 0.3s ease-in-out',
            // '-moz-transition':'-moz-transform 0.3s ease-in-out',
            // 'transition': 'transform 0.3s ease-in-out',
            //     '-webkit-transform': 'scale(1.05)',
            //     '-moz-transform': 'scale(1.05)',
            //     'transform': 'scale(1.05)',
        });
        $(this).siblings().find('img').css({
            '-webkit-filter': 'blur(2px) grayscale(0.8)',
            '-moz-filter': 'blur(2px) grayscale(0.8)',
            'filter': 'blur(2px) grayscale(0.8)',
            'opacity': '0.8'
        });
        $(this).find('.portfolio_item_info').show();

    }, function () {
        $(this).css({
            'z-index': '1',
            //     '-webkit-transition':'-webkit-transform 0.3s ease-in-out',
            // '-moz-transition':'-moz-transform 0.3s ease-in-out',
            // 'transition': 'transform 0.3s ease-in-out',
            // '-webkit-transform': 'scale(1.0)',
            //     '-moz-transform': 'scale(1.0)',
            //     'transform': 'scale(1.0)',
        });
        $(this).siblings().find('img').css({
            '-webkit-filter': 'blur(0px) grayscale(0.2)',
            '-moz-filter': 'blur(0px) grayscale(0.2)',
            'filter': 'blur(0px) grayscale(0.2)',
            'opacity': '1'
        });
        $(this).find('.portfolio_item_info').stop().hide();

    });


    $(document).ready(function () {
        //$('.interstellar_section').interstellar({});
    });


    //###############################################################################
    //############################## ANIMATIONS #####################################
    //###############################################################################


    $("[data-liffect]").appear({
        force_process: true
    });



    $("[data-liffect]").on('appear', function (e, $affected) {


        $affected.each(function (j) {
            // var curr_atts = $(this).children().attr("style");
            $(this).children().each(function (i) {
                var dur = 200;
                var attr = $(this).parent().attr('data-liffect-dur');

                if (typeof attr !== 'undefined' && attr !== false) {
                    var dur = $(this).parent().attr('data-liffect-dur');
                }


                $(this).attr("style", "-webkit-animation-delay:" + i * dur + "ms;" + "-moz-animation-delay:" + i * dur + "ms;" + "-o-animation-delay:" + i * dur + "ms;" + "animation-delay:" + i * dur + "ms;");
                if (i == $(this).size() - 1) {
                    $(this).parent().addClass("play");
                    i = 0;
                }
            });
        });

    });

    $("[data-animate='slideRight']").appear({
        force_process: true
    });

    $("[data-animate='slideRight']").on('appear', function (e, $affected) {
        $affected.each(function (i) {

            $(this).css({
               '-webkit-animation': 'slideRight 600ms ease both',
    '-moz-animation': 'slideRight 600ms ease both',
    '-o-animation': 'slideRight 600ms ease both',
    'animation': 'slideRight 600ms ease both',
            });

        });

    });

       $("[data-animate='slideBottom']").appear({
        force_process: true
    });
    $("[data-animate='slideBottom']").on('appear', function (e, $affected) {

        $affected.each(function (i) {

            $(this).css({
               '-webkit-animation': 'slideBottom 600ms ease both',
    '-moz-animation': 'slideBottom 600ms ease both',
    '-o-animation': 'slideBottom 600ms ease both',
    'animation': 'slideBottom 600ms ease both',
            });

        });

    });

      $("[data-animate='slideLeft']").appear({
        force_process: true
    });
    $("[data-animate='slideLeft']").on('appear', function (e, $affected) {

        $affected.each(function (i) {

            $(this).css({
               '-webkit-animation': 'slideLeft 600ms ease both',
    '-moz-animation': 'slideLeft 600ms ease both',
    '-o-animation': 'slideLeft 600ms ease both',
    'animation': 'slideLeft 600ms ease both',
            });

        });

    });

     $("[data-animate='zoomOut']").appear({
        force_process: true
    });
    $("[data-animate='zoomOut']").on('appear', function (e, $affected) {

        $affected.each(function (i) {

            $(this).css({
               '-webkit-animation': 'zoomOut 600ms ease both',
    '-moz-animation': 'zoomOut 600ms ease both',
    '-o-animation': 'zoomOut 600ms ease both',
    'animation': 'zoomOut 600ms ease both',
            });

        });

    });

    $("[data-animate='slideTop']").appear({
        force_process: true
    });
    $("[data-animate='slideTop']").on('appear', function (e, $affected) {

        $affected.each(function (i) {

            $(this).css({
               '-webkit-animation': 'slideTop 600ms ease both',
    '-moz-animation': 'slideTop 600ms ease both',
    '-o-animation': 'slideTop 600ms ease both',
    'animation': 'slideTop 600ms ease both',
            });

        });

    });

    $("[data-animate='slideTop']").appear({
        force_process: true
    });
    $("[data-animate='slideTop']").on('appear', function (e, $affected) {

        $affected.each(function (i) {

            $(this).css({
               '-webkit-animation': 'slideTop 600ms ease both',
    '-moz-animation': 'slideTop 600ms ease both',
    '-o-animation': 'slideTop 600ms ease both',
    'animation': 'slideTop 600ms ease both',
            });

        });

    });


    $("[data-animate='fadeIn']").appear({
        force_process: true
    });
    $("[data-animate='fadeIn']").on('appear', function (e, $affected) {

        $affected.each(function (i) {

            $(this).css({
               '-webkit-animation': 'fadeIn 600ms ease both',
    '-moz-animation': 'fadeIn 600ms ease both',
    '-o-animation': 'fadeIn 600ms ease both',
    'animation': 'fadeIn 600ms ease both',
            });

        });

    });

     $("[data-animate='bounceIn']").appear({
        force_process: true
    });
    $("[data-animate='bounceIn']").on('appear', function (e, $affected) {

        $affected.each(function (i) {

            $(this).css({
               '-webkit-animation': 'bounceIn 600ms ease both',
    '-moz-animation': 'bounceIn 600ms ease both',
    '-o-animation': 'bounceIn 600ms ease both',
    'animation': 'fadeIn 600ms ease both',
            });

        });

    });



    //###############################################################################
    //###############################################################################
    //###############################################################################

    if ($(document).width() == $('.header').width()) {
        $('.content').css('margin-top', $('.header').outerHeight());
    } else {
        $('.content').css('margin-top', '0px');
    }
    opened = false;
    $('#logo').click(function (event) {
        if ($(document).width() == $('.header').width()) {
            console.log("logo");
            event.preventDefault();
            if (!opened) {
                $('.header_section, .topnav, #searchbar').fadeIn(300);
                opened = true;
                $('.header').css('height', '80%');
                $('.social').css('position', 'static');
                $('.content').css('margin-top', $('.header').outerHeight());
                $(".header").getNiceScroll().resize();
            } else {
                $('.header_section, .topnav, #searchbar').fadeOut(300, function () {
                    console.log($('.header').outerHeight());
                    $('.header').css('height', 'initial');
                    $('.social').css('position', 'fixed');
                    $(".header").getNiceScroll().resize();
                    $('.content').css('margin-top', $('.header').outerHeight());
                });
                opened = false;

            }
        }
    });

    var social_height = $('.social').outerHeight(true);
    $('.topnav').css('margin-bottom', social_height);

    $('.topnav li, .topnav ul').click(function (event) {
        $(".header").getNiceScroll().resize();
    });


    $(".tabs").easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any custom width
        fit: true, // 100% fits in a container
        closed: false, // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
        activate: function () {} // Callback function, gets called if tab is switched
    });


    $(".vtabs").easyResponsiveTabs({
        type: 'vertical', //Types: default, vertical, accordion
        width: 'auto', //auto or any custom width
        fit: true, // 100% fits in a container
        closed: false, // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
        activate: function () {} // Callback function, gets called if tab is switched
    });

    $(".accordion").easyResponsiveTabs({
        type: 'accordion', //Types: default, vertical, accordion
        width: 'auto', //auto or any custom width
        fit: true, // 100% fits in a container
        closed: false, // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
        activate: function () {} // Callback function, gets called if tab is switched
    });



    $(".topnav").accordion({
        accordion: false,
        speed: 500,
        closedSign: '▼',
        openedSign: '▲'
    });
    var padd = $('ul.topnav li a').css('padding-left').replace('px', '');
    //var arr = $('ul.topnav li span').css('width').replace('px', '');
    //var ext = Math.round(padd) + Math.round(arr);
    //$('ul.topnav li span').parent().css({
    //    'padding-left': ext + 'px'
    //});

    $('.header').niceScroll({
        cursorcolor: '#000',
        cursoropacitymin: 0.1,
        cursoropacitymax: 0.4,
        cursorwidth: '7px',
        cursorborderradius: '0px',
        cursorborder: 'none',
        background: '#fff'
    });
    $('body').niceScroll({
        cursorcolor: '#000',
        railpadding: {
            top: 0,
            right: 5,
            left: 5,
            bottom: 0
        },
        cursoropacitymin: 0,
        scrollspeed: 100,
        cursoropacitymax: 0.8,
        cursorborderradius: '0px',
        cursorwidth: '5px',
        cursorborder: 'none',
        background: ''
    });


    var int_slider = $('.bxslider').bxSlider({
        mode: 'horizontal',
        controls: true,
        captions: true,
        speed: 900,
        autoHover: true,
        prevText: '<i class="icon-left-open-big"><i>',
        nextText: '<i class="icon-right-open-big"><i>',
        auto: false,
        infiniteLoop: true,
        hideControlOnEnd: true,
        adaptiveHeight: false,
        easing: 'easeOutCubic'
    });

    $('.bxslider').closest('.bx-wrapper').mouseover(function () {
        $(this).find('.bx-controls-direction').fadeIn(300);
    }).mouseleave(function () {
        $(this).find('.bx-controls-direction').fadeOut(300);
    });

    var thumb_slider = $('.bxthumb').bxSlider({
        mode: 'horizontal',
        controls: true,
        captions: false,
        pagerCustom: '#bx-pager',
        speed: 900,
        autoHover: true,
        prevText: '<i class="icon-left-open-big"><i>',
        nextText: '<i class="icon-right-open-big"><i>',
        auto: true,
        infiniteLoop: true,
        hideControlOnEnd: true,
        adaptiveHeight: true,
        easing: 'easeOutCubic'
    });
    $('.bxthumb').closest('.bx-wrapper').mouseover(function () {
        $(this).find('.bx-controls-direction').fadeIn(300);
    }).mouseleave(function () {
        $(this).find('.bx-controls-direction').fadeOut(300);
    });

    var fade_slider = $('.fade_slider').bxSlider({
        mode: 'fade',
        captions: false,
        controls: false,
        speed: 700,
        autoHover: true,
        prevText: '',
        nextText: '',
        auto: false,
        infiniteLoop: true,
        hideControlOnEnd: true,
        adaptiveHeight: true,
        easing: 'easeOutCubic'
    });


});

var opened = false;

function windowResizeEvent (event) {
    var social_height = $('.social').outerHeight(true);
    $('.topnav').css('margin-bottom', social_height);


    if ($(document).width() == $('.header').width()) {
        // opened = false;
        $('.content').css('margin-top', $('.header').outerHeight());

        $('.social').css('position', 'static');

        if (opened) {
            $('.header').css('height', '80%');
        } else {
            $('.header').css('height', 'initial');
            $('.header_section, .topnav, #searchbar').hide();
        }

        $(".menu").show();
    } else {
        opened = false;
        $('.content').css('margin-top', '0px');
        $('.header_section, .topnav, #searchbar').show();
        $('.social').css('position', 'fixed');
        $('.header').css('height', '100%');

        $(".menu").hide();
    }
}


$(window).resize(windowResizeEvent);

windowResizeEvent();
