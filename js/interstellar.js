
(function ($) {
    $.fn.interstellar = function (options) {
        //plugin name - unleash
        var o = $.extend({}, $.fn.interstellar.defaults, options);
        //Settings list and the default values
        $.fn.interstellar.defaults = {
            duration: 700,
           
        };
        return this.each(function () {
            
            var obj = $(this);

            var infinite_anim = obj.attr('data-infinite-interstellar');

            if (infinite_anim == "true"){
                var animate_slider = true;
            }else{
                if (infinite_anim == "false"){
                var animate_slider = false;
            }else{
                 var animate_slider = false;
            }
            }

            var cntrl = 0.4;
            var layer_1_speed = 700000000 / cntrl;
            var layer_2_speed = 600000000 / cntrl;
            var layer_3_speed = 400000000 / cntrl;
            var layer_4_speed = 200000000 / cntrl;
            var layer_5_speed = 90000000 / cntrl;
            
            var pos = 10000000;
            var pos2 = 0;
            var scroll_speed = 50;


  



function start_interstellar($handlr) {
        $handlr.find('.layer-1').animate({
            'background-position': pos + 'px ' + pos2 + 'px '
        }, layer_1_speed, 'linear');

        $handlr.find('.layer-2').animate({
            'background-position': pos + 'px ' + pos2 + 'px '
        }, layer_2_speed, 'linear');

        $handlr.find('.layer-3').animate({
            'background-position': pos + 'px ' + pos2 + 'px '
        }, layer_3_speed, 'linear');

        $handlr.find('.layer-4').animate({
            'background-position': pos + 'px ' + pos2 + 'px '
        }, layer_4_speed, 'linear');

        $handlr.find('.layer-5').animate({
            'background-position': pos + 'px ' + pos2 + 'px '
        }, layer_5_speed, 'linear');
    }


        var content = obj.html();

        obj.html('<div class="back-layer"><div class="layer-1 stars-1"><div class="layer-2 stars-2"> <div class="layer-3 stars-3"><div class="layer-4 stars-4"><div class="layer-5 stars-5"><div class="layer-texture">' + content + '</div></div></div></div></div></div></div>');






    if (animate_slider) {
        start_interstellar(obj);
}


if((obj.find('.bxslider').attr('class')) == 'bxslider'){

var int_slider = $('.bxslider').bxSlider({
        mode: 'horizontal',
        controls: true,
        captions: false,
        speed: 900,
        autoHover: true,
        prevText: '<i class="icon-left-open-big"><i>',
        nextText: '<i class="icon-right-open-big"><i>',
        auto: false,
        infiniteLoop: false,
        hideControlOnEnd: true,
        adaptiveHeight: true,
        easing: 'easeOutCubic',
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            var trans = oldIndex - newIndex;
            var curr1 = $('.bxslider').parents('.layer-1').css('background-position').split(" ");
            var pos_x1 = parseInt(curr1[0].replace("px", ""));
            var pos_y1 = parseInt(curr1[1].replace("px", ""));

            var curr2 = $('.bxslider').parents('.layer-2').css('background-position').split(" ");
            var pos_x2 = parseInt(curr2[0].replace("px", ""));
            var pos_y2 = parseInt(curr2[1].replace("px", ""));

            var curr3 = $('.bxslider').parents('.layer-3').css('background-position').split(" ");
            var pos_x3 = parseInt(curr3[0].replace("px", ""));
            var pos_y3 = parseInt(curr3[1].replace("px", ""));

            var curr4 = $('.bxslider').parents('.layer-4').css('background-position').split(" ");
            var pos_x4 = parseInt(curr4[0].replace("px", ""));
            var pos_y4 = parseInt(curr4[1].replace("px", ""));

            var curr5 = $('.bxslider').parents('.layer-5').css('background-position').split(" ");
            var pos_x5 = parseInt(curr5[0].replace("px", ""));
            var pos_y5 = parseInt(curr5[1].replace("px", ""));

            $('.bxslider').parents('.layer-1').stop().animate({
                'background-position': (pos_x1 + trans * 200) + 'px ' + (pos_y1) + 'px'
            }, 1000, 'easeOutCubic');
            $('.bxslider').parents('.layer-2').stop().animate({
                'background-position': (pos_x2 + trans * 400) + 'px ' + (pos_y2) + 'px'
            }, 1000, 'easeOutCubic');
            $('.bxslider').parents('.layer-3').stop().animate({
                'background-position': (pos_x3 + trans * 600) + 'px ' + (pos_y3) + 'px'
            }, 1000, 'easeOutCubic');
            $('.bxslider').parents('.layer-4').stop().animate({
                'background-position': (pos_x4 + trans * 800) + 'px ' + (pos_y4) + 'px'
            }, 1000, 'easeOutCubic');
            $('.bxslider').parents('.layer-5').stop().animate({
                'background-position': (pos_x5 + trans * 1000) + 'px ' + (pos_y5) + 'px'
            }, 1000, 'easeOutCubic');
            if (animate_slider) {
                start_interstellar($('.bxslider').parents('.interstellar_section'));
            }
        }
    });


$('.bx-wrapper').mouseover(function() {
    $(this).find('.bx-controls-direction').fadeIn(300);
}).mouseleave(function() {
    $(this).find('.bx-controls-direction').fadeOut(300);
});

$(window).resize(function (event) {
        // int_slider.reloadSlider();
    });

}

        $(window).scroll(function (event) {
          var scroll = -$(this).scrollTop() / 10;
                
               
                var curr1 = obj.find('.layer-1').css('background-position').split(" ");
                var pos_x1 = parseInt(curr1[0].replace("px", ""));
                var pos_y1 = 0;

                var curr2 = obj.find('.layer-2').css('background-position').split(" ");
                var pos_x2 = parseInt(curr2[0].replace("px", ""));
                var pos_y2 = 0

                var curr3 = obj.find('.layer-3').css('background-position').split(" ");
                var pos_x3 = parseInt(curr3[0].replace("px", ""));
                var pos_y3 = 0;

                var curr4 = obj.find('.layer-4').css('background-position').split(" ");
                var pos_x4 = parseInt(curr4[0].replace("px", ""));
                var pos_y4 = 0;

                var curr5 = obj.find('.layer-5').css('background-position').split(" ");
                var pos_x5 = parseInt(curr5[0].replace("px", ""));
                var pos_y5 = 0;

               if(animate_slider){
                obj.find('.layer-1').stop().animate({
                    'background-position': pos_x1 + 'px ' + (pos_y1 + 1 * scroll) + 'px'
                }, scroll_speed, 'easeOutCubic', function () {
                    obj.find('.layer-1').stop().animate({
                        'background-position': pos + 'px ' + pos2 + 'px '
                    }, layer_1_speed, 'linear');
                });

                obj.find('.layer-2').stop().animate({
                    'background-position': pos_x2 + 'px ' + (pos_y2 + 2 * scroll) + 'px'
                }, scroll_speed, 'easeOutCubic', function () {
                    obj.find('.layer-2').stop().animate({
                        'background-position': pos + 'px ' + pos2 + 'px '
                    }, layer_2_speed, 'linear');
                });

                obj.find('.layer-3').stop().animate({
                    'background-position': pos_x3 + 'px ' + (pos_y3 + 3 * scroll) + 'px'
                }, scroll_speed, 'easeOutCubic', function () {
                    obj.find('.layer-3').stop().animate({
                        'background-position': pos + 'px ' + pos2 + 'px '
                    }, layer_3_speed, 'linear');
                });

                obj.find('.layer-4').stop().animate({
                    'background-position': pos_x4 + 'px ' + (pos_y4 + 4 * scroll) + 'px'
                }, scroll_speed, 'easeOutCubic', function () {
                    obj.find('.layer-4').stop().animate({
                        'background-position': pos + 'px ' + pos2 + 'px '
                    }, layer_4_speed, 'linear');
                });

                obj.find('.layer-5').stop().animate({
                    'background-position': pos_x5 + 'px ' + (pos_y5 + 5 * scroll) + 'px'
                }, scroll_speed, 'easeOutCubic', function () {
                    obj.find('.layer-5').stop().animate({
                        'background-position': pos + 'px ' + pos2 + 'px '
                    }, layer_5_speed, 'linear');
                });
              }else{
                obj.find('.layer-1').stop().animate({
                    'background-position': pos_x1 + 'px ' + (pos_y1 + 1 * scroll) + 'px'
                }, scroll_speed, 'easeOutCubic');

                obj.find('.layer-2').stop().animate({
                    'background-position': pos_x2 + 'px ' + (pos_y2 + 2 * scroll) + 'px'
                }, scroll_speed, 'easeOutCubic');

                obj.find('.layer-3').stop().animate({
                    'background-position': pos_x3 + 'px ' + (pos_y3 + 3 * scroll) + 'px'
                }, scroll_speed, 'easeOutCubic');

                obj.find('.layer-4').stop().animate({
                    'background-position': pos_x4 + 'px ' + (pos_y4 + 4 * scroll) + 'px'
                }, scroll_speed, 'easeOutCubic');

                obj.find('.layer-5').stop().animate({
                    'background-position': pos_x5 + 'px ' + (pos_y5 + 5 * scroll) + 'px'
                }, scroll_speed, 'easeOutCubic');
              }


        });

   });
    }
})(jQuery);

