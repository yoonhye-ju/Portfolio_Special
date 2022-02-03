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
  if (wb > 600) {
    $('.company1').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 650) {
    $('.bubble2').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 700) {
    $('.company2').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 1200){
    $('.whale').css("transform", "translateY(0px)").css("opacity", "0.5");
  }
  else if(wb < 1200){
    $('.whale').css("transform", "translateY(0px)").css("opacity", "0");
  };
});