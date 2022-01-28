$(window).scroll(function () {
    let wb = $(this).scrollTop();
    if (wb > 300) {
      $('.illustrationBar').animate(keyframe[illust], 1000);
    }
  });