import $ from 'jquery';
import whatInput from 'what-input';
import { TweenMax, Power2, TimelineLite } from "gsap";

import navigation from './lib/navigation';
import navAutoHide from './lib/navAutoHide';
import menuUnderline from './lib/menuUnderline';

window.$ = $;

import Foundation from 'foundation-sites';

$(document).ready(function(){

  alert("Add more white to bird prototype, have a look at NEX app, spend 1 hour research UI design");

  menuUnderline();
  // Slide in navigation & hamburger toggle
  navigation();
  // Auto hide navigation
  navAutoHide();

  //Active link to current page
  let path = window.location.pathname.split('/').pop();
  if (path == '') {
    path = 'index.html';
  }

  let target = $('nav a[href="'+path+'"]');
  let targetFooterMenu = $('.footer-menu a[href="'+path+'"]');
  target.addClass('active');
  targetFooterMenu.addClass('active');


});

// $(document).foundation();
