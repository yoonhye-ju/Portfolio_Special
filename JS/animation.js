setTimeout(() => {
    $('.photoshopBar').css('.photoshopBar::before')
  }, 9000, function(){
    setTimeout(() => {
      $('.illustrationBar').css('.illustrationBar::before')
    }, 9000, function(){
      setTimeout(() => {
        $('.indesignBar').css('.indesignBar::before')
      }, 9000);
    });
  });