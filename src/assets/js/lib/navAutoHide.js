const navAutoHide = () => {
  let previousScroll = 0;
  $(window).scroll(function () {
    let $currentScroll = $(this).scrollTop();
    let headerNav = $('#header');
    // let navLogo = $('.nav-logo');
    let tbdLogo = $('#tbd-pink');

    if ( $currentScroll === 0 ){
      $('.opaque-background').removeClass('add-background');
      //change color of TBD logo
      TweenLite.to(tbdLogo, 0.25, {
        css:{
          fill:"#381F75",
        }
      });
      $('.toggle-bars').removeClass('toggle-reverse-up')
    } else {
      $('.opaque-background').addClass('add-background');
      TweenLite.to(tbdLogo, 0.25, {
        css:{
          fill:"#FFFFFF",
        }
      });
    };

    if ($currentScroll > previousScroll){
      let slideDown = (element, duration) => {
        TweenMax.to(element, duration, {
          y: '-110',
          ease: Linear.easeNone
        })
      };
      slideDown(headerNav, 0.3);
      // slideDown(navLogo, 0.5);s
      $('.nav-menu').removeClass('reverse');
      $('.toggle-bars').addClass('toggle-reverse-upe')
    }
    else {
      TweenMax.to([headerNav], 0.3, {
        y: 0,
        ease: Linear.easeNone
      });
      $('.nav-menu').addClass('reverse');
    }
    if ( $currentScroll === 0 ){
      $('.nav-menu').removeClass('reverse');
    }

      previousScroll = $currentScroll;
  });
}

export default navAutoHide;
