$(window).scroll(function () {
    let move = $(this).scrollTop();
    if (move > 1400) {
      $('.leftSchrool').css("transform", "translateY(0px)").css("opacity", "1");
    }
    if (move > 1000) {
      $('.rightEx').css("transform", "translateY(0px)").css("opacity", "1");
    }
});
  