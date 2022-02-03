$(function () {
  $('.portfolio1').mouseover(function () {
    $(this).fadeIn(3000, function () {
      $(this).css('background-color', 'rgb(148,187,233)')
      $(this).css('transition','all 3s')
    });
  });
  $('.portfolio1').mouseout(function () {
      $(this).removeClass()
  });
});