$(function () {
  function next() {
    $('.slide:last').prependTo('#programBox');
    $('#programBox').css('margin-left', -360);
    $('#programBox').animate({ marginLeft: 0 }, 800)
  }

  function prev() {
    $('#programBox').animate({ marginLeft: -360 }, function () {
      $('.slide:first').appendTo('#programBox');
      $('#programBox').css({ marginLeft: 0 });
    });
  }

  function slide() {
    $('.slide:last').prependTo('#programBox');
    $('#programBox').css({ marginLeft: -360 });
    $('#programBox').animate({ marginLeft: 0 });
  }
  setInterval(slide, 3000);

  $('.prev').click(function () {
    prev();
  });
  $('.next').click(function () {
    next();
  });
});