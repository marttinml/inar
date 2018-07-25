;(function() {
  'use strict';

  angular
    .module('sample-app')
    .controller('MainController', MainController);

  MainController.$inject = ['$state'];

  function MainController($state){

    var _this = this;

    this.mainOptions = {
      sectionsColor: ['rgb(255,255,255)', 'rgb(255,255,255)', 'rgb(255,255,255)'],
			anchors: ['firstPage', 'secondPage', '3rdPage'],
      menu: '#menu',
      scrollingSpeed: 1500
    };

    this.slides = [
      {
        title: 'Simple',
        description: 'Easy to use. Configurable and customizable.',
        src: 'images/1.png'
      },
      {
        title: 'Cool',
        description: 'It just looks cool. Impress everybody with a simple and modern web design!',
        src: 'images/2.png'
      },
      {
        title: 'Compatible',
        description: 'Working in modern and old browsers too!',
        src: 'images/3.png'
      }
    ];

    this.addSlide = function() {
      _this.slides.push({
        title: 'New Slide',
        description: 'I made a new slide!',
        src: 'images/1.png'
      });

      console.log('added slide');

      console.log(_this);
    };

  }

})();
