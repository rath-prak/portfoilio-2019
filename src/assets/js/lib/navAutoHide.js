const navAutoHide = () => {
  let previousScroll = 0;
  $(window).scroll(function () {
    let $currentScroll = $(this).scrollTop();
    let headerNav = $('#header');
    // let navLogo = $('.nav-logo');

    if ($currentScroll > previousScroll){
      let slideDown = (element, duration) => {
        TweenMax.to(element, duration, {
          y: '-110',
          ease: Linear.easeNone
        })
      };
      slideDown(headerNav, 0.3);
      // slideDown(navLogo, 0.5);
    }
    else {
      TweenMax.to([headerNav], 0.3, {
        y: 0,
        ease: Linear.easeNone
      });
    }
      previousScroll = $currentScroll;
  });
}

export default navAutoHide;
