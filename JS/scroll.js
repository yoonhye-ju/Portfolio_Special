$(window).scroll(function () {
  let wb = $(this).scrollTop();
  if (wb > 200) {
    $('.starlight').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 350) {
    $('.portfolio_text').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 450) {
    $('.aboutMe_Left').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (499 > wb) {
    $('.home').attr('src', 'img/header_home.png');
  }
  else{
    $('.home').attr('src', 'img/header_home_line.png');
  }
  if (wb >= 500) {
    $('.people').attr('src', 'img/header_people.png');
  }
  else {
    $('.people').attr('src', 'img/header_people_line.png');
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
  if (wb > 900) {
    $('.prize').css("transform", "translateY(0px)").css("opacity", "1");
  }
  if (wb > 1000) {
    $('.whale').css("transform", "translateY(0px)").css("opacity", "0.5");
  }
  else {
    $('.whale').css("transform", "translateY(0px)").css("opacity", "0");
  }
  if (wb > 1200) {
    $('.stars').css("transform", "translateY(0px)").css("opacity", "0.8");
  }
  else {
    $('.stars').css("transform", "translateY(0px)").css("opacity", "0");
  }
    if (wb > 1200) {
    $('.stars').css("transform", "translateY(0px)").css("opacity", "0.8");
  }
  if ( wb > 1845){
    $('.people').attr('src', 'img/header_people_line.png');
  }
  if ( wb >= 1846){
    $('.work').attr('src', 'img/header_work.png');
  } 
  else {
    $('.work').attr('src', 'img/header_work_line.png');
  }
  if(wb > 2419){
    $('.work').attr('src', 'img/header_work_line.png');
  }
  if ( wb > 2420){
    $('.letter').attr('src', 'img/header_letter.png');
  }
  else {
    $('.letter').attr('src', 'img/header_letter_line.png');
  }
  if (wb > 2420) {
    $('.starLight').css("transform", "translateY(0px)").css("opacity", "1");
  }
});