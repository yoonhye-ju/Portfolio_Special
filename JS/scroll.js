$(window).scroll(function () {
  let wb = $(this).scrollTop();
  if (wb > 350) {
    $('.portfolio_text').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 200) {
    $('.starlight').css("transform", "translateY(0px)").css("opacity", "1");
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
  if (wb > 800) {
    $('.school').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 850) {
    $('.prize').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 1000) {
    $('.whale').css("transform", "translateY(0px)").css("opacity", "0.5");
  }
  else if (wb < 1000) {
    $('.whale').css("transform", "translateY(0px)").css("opacity", "0");
  }
  if (wb > 1000) {
    $('#portfolioBox').css("background", "linear-gradient(0deg, rgb(255, 255, 255) 50%, rgba(208,179,212,1) 80%, rgba(148,187,233,1) 100%)");
  }
});