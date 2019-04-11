import $ from 'jquery';
import whatInput from 'what-input';
import { TweenMax, Power2, TimelineLite } from "gsap";
import slick from 'slick-carousel';

import navigation from './lib/navigation';
// import navAutoHide from './lib/navAutoHide';
import menuUnderline from './lib/menuUnderline';

window.$ = $;

import Foundation from 'foundation-sites';

$(document).ready(function(){

  menuUnderline();
  // Slide in navigation & hamburger toggle
  navigation();
  // Auto hide navigation
  // navAutoHide();

  //nOS circle infinate rotate

 let nosCircle = document.getElementById('nos-circle')

  TweenMax.to(nosCircle, 2.5, { 
      rotation:"360", 
      ease:Linear.easeNone, 
      repeat:-1,
    });


  // Slick
  $('.slide-wrapper').slick({
    draggable: true,
    arrows: true,
    dots: true,
    // autoplay: true,
    autoplaySpeed: 3500,
    speed: 1500,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100
  });


});

// $(document).foundation();
