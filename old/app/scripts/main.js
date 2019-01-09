/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function($, Mustache) {
  'use strict';

    // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }
  // Your custom JavaScript goes here

  var mentors = [
    {
      name: 'Israel Alcázar',
      image: 'images/israel_alcazar_icon.png',
      curriculum: 'Agile Coach, Mentor y Formador en ' +
      'metodologías ágiles y socio co-fundador de Thinking with you',
      twitterName: '@ialcazar',
      twitterLink: 'https://twitter.com/ialcazar',
      linkedinLink: 'https://www.linkedin.com/company-beta/5304167/?pathWildcard=5304167',
      profileLink: '/mentores/israel_alcazar.html'
    },
    {
      name: 'Sonia Villanueva',
      image: 'images/sonia_villanueva.png',
      curriculum: 'strategist, experience designer, innovation woman',
      twitterName: '@sonianoneka',
      twitterLink: 'https://twitter.com/sonianoneka',
      linkedinLink: 'https://www.linkedin.com/in/soniavillanueva/',
      profileLink: '/mentores/sonia_villanueva.html'
    },
    {
      name: 'María Benavides',
      image: 'images/maria_benavides.png',
      curriculum: 'UX Research & Innovation Strategy. Co-founder SCROLLUP',
      twitterName: '@MariaBenavidesR',
      twitterLink: 'https://twitter.com/MariaBenavidesR',
      linkedinLink: 'https://www.linkedin.com/in/maríabenavides/',
      profileLink: '/mentores/maria_benavides.html'
    },
    {
      name: 'María Velasco',
      image: 'images/maria_velasco.png',
      curriculum: 'UX Lead & Digital Transformation en ACCENTURE',
      twitterName: '@VelascoGomezM',
      twitterLink: 'https://twitter.com/VelascoGomezM',
      linkedinLink: 'https://www.linkedin.com/in/velascogomez/',
      profileLink: '/mentores/maria_velasco.html'
    },
    {
      name: 'Nando Abril',
      image: 'images/nando_abril.png',
      curriculum: 'Head Hunter & Strategic Designer for Creative Industries',
      twitterName: '@nando_abril',
      twitterLink: 'https://twitter.com/nando_abril',
      linkedinLink: 'https://www.linkedin.com/in/nandoabril/',
      profileLink: '/mentores/nando_abril.html'
    },
    {
      name: 'David Gómez',
      image: 'images/david_gomez.png',
      curriculum: 'Change Agent & Agile Coach en THINKING WITH YOU',
      twitterName: '@DavidGomezR_',
      twitterLink: 'https://twitter.com/DavidGomezR_',
      linkedinLink: 'https://www.linkedin.com/in/davidgomezrodriguez/',
      profileLink: '/mentores/david_gomez.html'
    },
    {
      name: 'Rafael Zaragoza',
      image: 'images/rafael_zaragoza.png',
      curriculum: 'Design Thinker & Co-founder THINKERSCO',
      twitterName: '@RafaZaragozaTC',
      twitterLink: 'https://twitter.com/RafaZaragozaTC',
      linkedinLink: 'https://www.linkedin.com/in/rafaelzaragozaalvaro/',
      profileLink: '/mentores/rafael_zaragoza.html'
    },
    {
      name: 'José Manuel de la Chica',
      image: 'images/jose_manuel_de_la_chica.png',
      curriculum: 'Product Manager y Venture ' +
      'Architect en BBVA - New Digital Business',
      twitterName: '@Delachica',
      twitterLink: 'https://twitter.com/delachica',
      linkedinLink: 'https://www.linkedin.com/in/delachica/',
      profileLink: '/mentores/jose_manuel_de_la_chica.html'
    },
    {
      name: 'Ana Pérez Echevarría',
      image: 'images/ana_perez_echevarria.png',
      curriculum: 'Digital Channels, UX Manager en ING Bank Spain',
      twitterName: '@apechevarria',
      twitterLink: 'https://twitter.com/apechevarria',
      linkedinLink: 'https://www.linkedin.com/in/ana-p%C3%A9rez-echevarr%C3%ADa-b87b2411a/',
      profileLink: '/mentores/ana_perez_echevarria.html'
    },
    {
      name: 'Ángela Sánchez Vignote',
      image: 'images/angela_sanchez_vignote.png',
      curriculum: 'Directora de Canales Digitales de ING DIRECT España',
      twitterName: '@asvignote',
      twitterLink: 'https://twitter.com/asvignote',
      linkedinLink: 'https://www.linkedin.com/in/angela-sanchez-vignote-27ba2732/',
      profileLink: '/mentores/angela_sanchez_vignote.html'
    },
    {
      name: 'Alberto Calleja',
      image: 'images/alberto_calleja.png',
      curriculum: 'UX Designer en Kairós Digital Solutions S.L.',
      twitterName: '',
      twitterLink: 'none',
      linkedinLink: 'https://www.linkedin.com/in/acallejavillar/',
      profileLink: '/mentores/alberto_calleja.html'
    },
    {
      name: 'Anxo López',
      image: 'images/anxo_lopez.png',
      curriculum: 'Strategic and Service Designer | BBVA - Universidad Alfonso X El Sabio',
      twitterName: '@anxolopez',
      twitterLink: 'https://twitter.com/anxolopez',
      linkedinLink: 'https://www.linkedin.com/in/anxolopez/',
      profileLink: '/mentores/anxo_lopez.html'
    },
    {
      name: 'Lucía Palacios',
      image: 'images/lucia_palacios.png',
      curriculum: 'Co-Founder at ScrollUp. UX Research and Innovation Strategy',
      twitterName: '@anxolopez',
      twitterLink: 'https://twitter.com/lpalacios',
      linkedinLink: 'https://www.linkedin.com/in/luciapalaciosfernandez/',
      profileLink: '/mentores/lucia_palacios.html'
    }
  ];

  /**
   * Generates a random shuffle array
   * @param {array} Array
   */
  function shuffle (array) {
    var i = 0,
        j = 0,
        temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  shuffle(mentors);

  $(function() {
    /**
     *  Close the drawer panel
     */
    function closeDrawer() {
      $('.mdl-layout__drawer').toggleClass('is-visible');
      $('.mdl-layout__obfuscator').toggleClass('is-visible');
    }
    /**
     * render the mentors template
     */
    function loadMentors() {
      var template = $('#mentors-template').html();
      Mustache.parse(template);
      var rendered = Mustache.render(template, {mentors: mentors});
      $('#mentores').html(rendered);
    }
    /**
     * Stop video function
     */
    function stopVideoAndHide() {
      if (window.player && window.player.stopVideo) {
        window.player.stopVideo();
        window.videoWrap.removeClass('video-wrap--show');
        window.videoWrap.addClass('video-wrap--hide');
      }
    }
    $('.mdl-navigation #event_link').smoothScroll({
      offset: -62,
      scrollElement: $('.mdl-layout__content'),
      beforeScroll: stopVideoAndHide
    });
    $('.mdl-navigation #agenda_link').smoothScroll({
      offset: -55,
      scrollElement: $('.mdl-layout__content'),
      beforeScroll: stopVideoAndHide
    });
    $('.mdl-navigation #mentors_link').smoothScroll({
      offset: -55,
      scrollElement: $('.mdl-layout__content'),
      beforeScroll: stopVideoAndHide
    });
    $('.mdl-navigation #location_link').smoothScroll({
      offset: -62,
      scrollElement: $('.mdl-layout__content'),
      beforeScroll: stopVideoAndHide
    });
    $('.mdl-navigation #organization_link').smoothScroll({
      offset: -50,
      scrollElement: $('.mdl-layout__content'),
      beforeScroll: stopVideoAndHide
    });
    $('.mdl-navigation #contact_link').smoothScroll({
      offset: 100,
      scrollElement: $('.mdl-layout__content'),
      beforeScroll: stopVideoAndHide
    });
    $('#ux_rumble_home').smoothScroll({
      offset: -100,
      scrollElement: $('.mdl-layout__content'),
      beforeScroll: stopVideoAndHide
    });
    // menu responsive links
    $('#event_side_link').smoothScroll({
      offset: -62,
      scrollElement: $('.mdl-layout__content'),
      beforeScroll: stopVideoAndHide,
      afterScroll: closeDrawer
    });
    $('#agenda_side_link').smoothScroll({
      offset: -55,
      scrollElement: $('.mdl-layout__content'),
      beforeScroll: stopVideoAndHide,
      afterScroll: closeDrawer
    });
    $('#mentors_side_link').smoothScroll({
      offset: -55,
      scrollElement: $('.mdl-layout__content'),
      beforeScroll: stopVideoAndHide,
      afterScroll: closeDrawer
    });
    $('#location_side_link').smoothScroll({
      offset: -62,
      scrollElement: $('.mdl-layout__content'),
      beforeScroll: stopVideoAndHide,
      afterScroll: closeDrawer
    });
    $('#organization_side_link').smoothScroll({
      offset: -50,
      scrollElement: $('.mdl-layout__content'),
      beforeScroll: stopVideoAndHide,
      afterScroll: closeDrawer
    });
    $('#contact_side_link').smoothScroll({
      offset: 100,
      scrollElement: $('.mdl-layout__content'),
      beforeScroll: stopVideoAndHide,
      afterScroll: closeDrawer
    });
    $('#ux_rumble_side_link').smoothScroll({
      offset: -100,
      scrollElement: $('.mdl-layout__content')
    });
    // footer links
    $('#footer_event_link').smoothScroll({
      offset: -62,
      scrollElement: $('.mdl-layout__content')
    });
    $('#footer_agenda_link').smoothScroll({
      offset: -55,
      scrollElement: $('.mdl-layout__content')
    });
    $('#footer_mentores_link').smoothScroll({
      offset: -55,
      scrollElement: $('.mdl-layout__content')
    });
    $('#footer_location_link').smoothScroll({
      offset: -62,
      scrollElement: $('.mdl-layout__content')
    });
    $('#footer_organization_link').smoothScroll({
      offset: -50,
      scrollElement: $('.mdl-layout__content')
    });
    // close drawer panel
    $('#ux-close__drawer-icon').on('click', closeDrawer);
    $('.ux-navigation__button').on('click', closeDrawer);
    // countdown days
    var date = new Date(2017, 4, 6, 9, 30, 0);
    $('.ux-timer').countdown(date.getTime())
    .on('update.countdown', function(event) {
      $('.ux-timer-days').text(event.strftime('%D'));
      $('.ux-timer-hours').text(event.strftime('%H'));
      $('.ux-timer-minutes').text(event.strftime('%M'));
      $('.ux-timer-seconds').text(event.strftime('%S'));
    })
    .on('finish.countdown', function() {
      $(this).html('<a id="ux-button-live" href="#twitterfeed"><button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent ux-button-live">LIVE!</button></a>');
      $('#twitterfeed').css('display', 'flex');
      $('#ux-button-live').smoothScroll({
        offset: 170,
        scrollElement: $('.mdl-layout__content'),
        beforeScroll: stopVideoAndHide
      });
    });
    // load mentors array
    loadMentors();

    // conditions email subscription
    var subscriptionCheck = $('.ux-conditions-check');
    var buttonSubscription = $('.ux-submit-button');
    var subscriptionConditions = $('.ux-conditions-subscription');
    $('.ux-conditions-check').click(function(evt) {
      evt.stopPropagation();
      if (subscriptionCheck.is(':checked')) {
        buttonSubscription.addClass('ux-submit-button-enable');
        subscriptionConditions.addClass('ux-conditions-animation');
      } else {
        buttonSubscription.removeClass('ux-submit-button-enable');
        subscriptionConditions.removeClass('ux-conditions-animation');
      }
    });

    // slider functionality
    $('.ux-mentors-display').slick({
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      centerPadding: '0px',
      appendDots: $('.ux-mentors-dots'),
      dotsClass: 'ux-dots-class',
      prevArrow: '<div><i class="material-icons">navigate_before</i></div>',
      nextArrow: '<div><i class="material-icons">navigate_next</i></div>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true
          }
        }
      ]
    });
  });
})(window.jQuery, window.Mustache);
