
//Roof Social Icons Tooltip
$('.social-link').tooltip();

$(document).ready(function () {

  var message = new Array;
   message[0]= "New To Programming?"
   message[1]= "Need Some Help?"
   message[2] = "What's an alias in rails?"
   message[3] = "What's up?"
   message[4] = "Making a database is simple"
   message[5] = "Should you make your own website?"
   message[6] = "Development mode vs. production?"
   message[7] = "How many hours have you been debugging?"
   message[8] = "Press Refresh and see this message change. How did I do it?"

   var i = Math.floor(message.length * Math.random());

  $('#newsletter').html('<h4 class="deepshadow special_text">' + message[i])+ '</h4>';

  // Showing HTML Resources content
  $('.html-resources').hide();
  $('.hide-html').hide();
  $('.view-html').click(function(){
    $('.html-resources').show();
    $('.view-html').hide();
    $('.hide-html').show();
  })

  $('.hide-html').click(function(){
    $('.html-resources').hide();
    $('.hide-html').hide();
    $('.view-html').show();

  })
  $('.javascript-resources').hide();
  $('.hide-javascript').hide();

  $('.view-javascript').click(function(){
    $('.javascript-resources').show();
    $('.view-javascript').hide();
    $('.hide-javascript').show();
  })

  $('.hide-javascript').click(function(){
    $('.javascript-resources').hide();
    $('.view-javascript').show();
    $('.hide-javascript').hide();
  })

  $('.ruby-resources').hide();
  $('.hide-ruby').hide();

  $('.view-ruby').click(function(){
    $('.ruby-resources').show();
    $('.view-ruby').hide();
    $('.hide-ruby').show();
  })

  $('.hide-ruby').click(function(){
    $('.ruby-resources').hide();
    $('.view-ruby').show();
    $('.hide-ruby').hide();
  })


  //Dropdown Menus
$(".dropdown").hover(
  function () {
    $(this).addClass('open');
  },
  function () {
    $(this).removeClass('open');
  }
  );

/* ==========================================================================
   Touch Owl Carousel
   ========================================================================== */
$(".touch-slider").owlCarousel({
    navigation: true,
    pagination: false,
    slideSpeed: 1000,
    stopOnHover: true,
    autoPlay: true,
    items: 1,
    itemsDesktopSmall: [1024, 1],
    itemsTablet: [600, 1],
    itemsMobile: [479, 1]
});

/* ==========================================================================
   Touch Owl Carousel
   ========================================================================== */
$(".post-carousel").owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 1000,
    stopOnHover: true,
    autoPlay: true,
    items: 3,
    itemsDesktopSmall: [1024, 2],
    itemsTablet: [640, 1],
    itemsMobile: [479, 1]
});

  var owl = $(".slider");
  owl.owlCarousel({
    navigation : true,
    pagination: false,
    autoPlay: true,
    singleItem : true,
    transitionStyle : "fade"
  });

 // Nav Menu & Search
$('.show-search').click(function() {
$('.full-search').fadeIn(300);
$('.full-search input').focus();
});
$('.full-search input').blur(function() {
$('.full-search').fadeOut(300);
});

$('.slider').find('.owl-prev').html('<i class="ico-keyboard_arrow_left"></i>');
$('.slider').find('.owl-next').html('<i class="ico-keyboard_arrow_right"></i>');


$('.touch-slider').find('.owl-prev').html('<i class="ico-keyboard_arrow_left"></i>');
$('.touch-slider').find('.owl-next').html('<i class="ico-keyboard_arrow_right"></i>');

// Mixitup portfolio filter
jQuery(function() {
  jQuery('#portfolio-list').mixItUp({
    animation: {
      duration: 500
    }
  });
});

  // light box
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

$(function (){

  var url = 'http://graygrids.com/';

  var options = {

    twitter: {
      text: 'Check out this awesome jQuery Social Buttons Plugin! ',
      via: 'GrayGrids'
    },

    twitter : true,
    facebook : true,
    googlePlus : true,
    linkedin : true,
    dribbble : true,
    pinterest: true
  };

  $('.socialShare').shareButtons(url, options);

});


});

/**
 * Slick Nav
 */

$('.wpb-mobile-menu').slicknav({
  prependTo: '.navbar-header',
  parentTag: 'span',
  allowParentLinks: true,
  duplicate: false,
  label: '',
  closedSymbol: '<i class="fa fa-angle-right"></i>',
  openedSymbol: '<i class="fa fa-angle-down"></i>',
});

// Counter
  $('.timer').countTo();
  $('.counter-item').appear(function() {
    $('.timer').countTo();
  }


  , {
    accY: -100
  });
