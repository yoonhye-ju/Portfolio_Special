$(window).scroll(function () {
  let wb = $(this).scrollTop();
  if (wb > 700) {
    $('.illustrationBar').css({'animation':'illust'})
    $('.photoshopBar').css('.photoshopBar::before')
  }
});