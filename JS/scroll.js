$(window).scroll(function () {
  let wb = $(this).scrollTop();
  if (wb > 350) {
    $('.portfolio_text').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 450) {
    $('.aboutMe_Left').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 550) {
    $('.bubble').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 750){
    $('.whale').css("transform", "translateY(0px)").css("opacity", "0.5");
  }
});