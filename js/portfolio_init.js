$(document).ready(function() {

  var port_width = $('.content_section').width();
  var port_cols = $('.portfolio').attr('data-portfolio-cols');
  var item_width = Math.floor(port_width/port_cols);
  $('.portfolio_item').width(item_width);

  var gap = (((1-((port_cols*item_width)/port_width))*port_cols)*100);
  var gap_fill = 100 + gap;

  // $('.portfolio_item:nth-child(' + port_cols + 'n+' + port_cols + ')').css({
  //   'overflow': 'visible'});

$('.portfolio_item').css({
    'overflow': 'visible'});

  $('.portfolio_item').find('img').width(gap_fill + '%');
   $('.portfolio_item').find('.portfolio_item_info').width((gap_fill-10) + '%');

 var $p_container = $('.portfolio');
        $p_container.imagesLoaded( function(){
      $p_container.isotope({
        itemSelector: '.portfolio_item',
         masonry : {
        gutterWidth : 0
      }
      });
      });

  $('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
 $p_container.isotope({ filter: selector });
  return false;
});

  $(window).resize(function(event) {
   var port_width = $('.content_section').width();
  var port_cols = $('.portfolio').attr('data-portfolio-cols');
  var item_width =  Math.floor(port_width/port_cols);
  $('.portfolio_item').width(item_width);
   var gap = (((1-((port_cols*item_width)/port_width))*port_cols)*100);
  var gap_fill = 100 + gap;

  // $('.portfolio_item:nth-child(' + port_cols + 'n+' + port_cols + ')').css({
  //   'overflow': 'visible'});

$('.portfolio_item').css({
    'overflow': 'visible'});

  $('.portfolio_item').find('img').width(gap_fill + '%');
   $('.portfolio_item').find('.portfolio_item_info').width((gap_fill-10) + '%');

  $p_container.isotope( 'reLayout' );
});

});