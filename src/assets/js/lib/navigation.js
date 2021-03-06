// import $ from 'jquery';

const navigation = () => {


  let $toggleBarsWrapper = $(".toggle-bar-wrapper");
  let $bar1 = $toggleBarsWrapper.find("b:nth-child(1)");
  let $bar2 = $toggleBarsWrapper.find("b:nth-child(2)");
  let $bar3 = $toggleBarsWrapper.find("b:nth-child(3)");
  let $toggleBars = $('.toggle-bars');

  let $dropdownLink = $('.dropdown-link');
  let $dropdownMenu = $('.dropdown-menu');
  let $sidenavWrapper = $('.sidenav-wrapper');
  let $sidenavDroplink = $('.sidenav-dropdown-link');
  let $sidenavDropMenu = $('.sidenav-dropdown-menu');
  let $overlayNav = $('.overlay-nav');
  let tbdLogo = $('#tbd-pink');

  // Hamburger toggle
  let tl = new TimelineMax({ paused:true, reversed:true });

  tl.to($bar1, 0.2, { y: 10,})
    .to($bar1, 0.5, { rotation: -135, ease: Back.easeOut})

  tl.to($bar3, 0.2, { y: -10,}, 0)
    .to($bar3, 0.5, { rotation: 135, ease: Back.easeOut}, "-=0.5")

  tl.to($bar2, 0.5, { opacity: 0, ease: Back.easeIn}, -0.5);

  tl.to($sidenavWrapper, 0.5, {
    x: '0',
    ease: Back.easeIn,
  }, 0.2)
  
  $toggleBarsWrapper.click(() => {
    tl.reversed() ? tl.play() : tl.reverse();

    setTimeout(function(){
      $('.opaque-background').toggleClass('add-background');
      $overlayNav.toggleClass('open');
      $toggleBars.toggleClass('toggle-reverse');
    }, 700);
  });


  // navigation dropdown menu
  $dropdownLink.hover(function () {
    let dropdown = $(this).find($dropdownMenu)
     dropdown.slideDown('fast');
  },
  function () {
     $dropdownMenu.slideUp('fast');
  });

  $sidenavDroplink.on('click', () => {
     $sidenavDropMenu.toggleClass('sidenav-active-menu');
  });

}

export default navigation;
