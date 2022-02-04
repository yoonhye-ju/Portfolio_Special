$(function(){
  $('.library').mouseover(function(){
    $('.library').css('transform','translateY(-2138px)')
  });
  $('.library').mouseout(function(){
    $('.library').css('transform','translateY(0px)')
  });
});

$(function () {
  $('button').click(function () {
    $('.librarySub').show(function () {
      $('.librarySub').mouseover(function () {
        $('.librarySub').css('transform', 'translateY(-2138px)')
      });
      $('.librarySub').mouseout(function () {
        $('.librarySub').css('transform', 'translateY(0px)')
      });
    });
  });
});