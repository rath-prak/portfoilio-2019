const btnUnderline = () => {
  let $menuItem = $('.nav-menu, .portfolio-menu').find('a');

  $menuItem.mouseover(function(){
    let $menuItemUnderline = $( this ).next( '.menu-underline' );

    TweenMax.to($menuItemUnderline, 0.5, {
      scaleX:1,
      ease: Power4.easeInOut,
    })
  });

  $menuItem.mouseleave(function(){
    let $menuItemUnderline = $( this ).next( '.menu-underline' );

    TweenMax.to($menuItemUnderline, 0.5, {
      scaleX:0,
      ease: Power4.easeInOut,
    })
  });

}

export default btnUnderline;
