$(function(){
    //만개의레시피
  $('.subPage').click(function () {
    $('.recipe').css('display', 'none');
    $('.recipeSub').css('display', 'block');
    $('.subPage').hide();
    $('.mainPage').show();

    $('.tenThousand_Monitor').mouseover(function () {
      $('.recipeSub').css('transform', 'translateY(-1500px)')
    });
    $('.tenThousand_Monitor').mouseout(function () {
      $('.recipeSub').css('transform', 'translateY(0px)')
    });
  });
  $('.mainPage').click(function () {
    $('.perfume').css('display', 'block');
    $('.perfumeSub').css('display', 'none');
    $('.mainPage').hide();
    $('.subPage').show();
  });

  //조말론
  $('.perfume_Monitor').mouseover(function () {
    $('.perfume').css('transform', 'translateY(-468px)')
  });
  $('.perfume_Monitor').mouseout(function () {
    $('.perfume').css('transform', 'translateY(0px)')
  });
  $('.subPage').click(function () {
    $('.perfume').css('display', 'none');
    $('.perfumeSub').css('display', 'block');
    $('.subPage').hide();
    $('.mainPage').show();

    $('.perfume_Monitor').mouseover(function () {
      $('.perfumeSub').css('transform', 'translateY(-1500px)')
    });
    $('.perfume_Monitor').mouseout(function () {
      $('.perfumeSub').css('transform', 'translateY(0px)')
    });
  });
  $('.mainPage').click(function () {
    $('.perfume').css('display', 'block');
    $('.perfumeSub').css('display', 'none');
    $('.mainPage').hide();
    $('.subPage').show();
  });
});