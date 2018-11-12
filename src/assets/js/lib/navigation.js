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

  // tbd logo color change
  tl.to(tbdLogo, 1, {
    css:{
      fill:"#FFFFFF",
    }
  });

  // $toggleBarsWrapper.click(() => {
  //   tl.reversed() ? tl.play() : tl.reverse();
  // });

  


  
  $toggleBarsWrapper.click(() => {
    tl.reversed() ? tl.play() : tl.reverse();

    setTimeout(function(){
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


  // $('.tabs-nav .tab-links a').on('click', function(e)  {
  //   var currentAttrValue = $(this).attr('href');
  //   // Show/Hide Tabs
  //   $('.tabs-nav ' + currentAttrValue).show().siblings().hide();
  //   // Change/remove current tab to active
  //   $(this).parent('li').addClass('active').siblings().removeClass('active');
  //   e.preventDefault();
  // });

  // side nav secondary dropdown
  $sidenavDroplink.on('click', () => {
     $sidenavDropMenu.toggleClass('sidenav-active-menu');
  });

}

export default navigation;
