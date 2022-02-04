$(function(){
  $('.monitor').mouseover(function(){
    $('.library').css('transform','translateY(-2138px)')
  });
  $('.monitor').mouseout(function(){
    $('.library').css('transform','translateY(0px)')
  });

  $("button").click(function(){
    $(".monitor").attr("src","img/portfolio_online_library_sub.jpeg");
    });

  // $('button').click(function () {
  //   $('.library').hide();
  //   $('.librarySub').show(function () {
  //     $('.monitor').mouseover(function () {
  //       $('.librarySub').css('transform', 'translateY(-1930px)')
  //     });
  //     $('.monitor').mouseout(function () {
  //       $('.librarySub').css('transform', 'translateY(0px)')
  //     });
  //   });
  // });
});