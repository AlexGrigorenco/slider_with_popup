
$(document).ready(function(){  

    $('.bxslider').bxSlider({
        pager: false,
        controls: true,
        maxSlides: 4,
        minSlides: 1,
        slideMargin: 38,
        slideWidth: 'auto',
        nextText: `<span></span>`,
		    prevText: `<span></span>`,
        touchEnabled: false,
    }); 

    Fancybox.bind('[data-fancybox]', {
      //
    });
  });


  