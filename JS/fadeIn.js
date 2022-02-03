$(function () {
  $('.portfolio1').mouseover(function () {
    $(this).fadeIn(3000, function () {
      $(this).css('background-color', 'rgb(148,187,233)')
    });
  });
  $('.portfolio1').mouseout(function () {
    $(this).fadeOut(1000, function(){
      $(this).css('background-color', 'transparent')
    });
  });
});