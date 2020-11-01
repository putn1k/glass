$('.header__menu-button').click(function(){ // eslint-disable-line
  $('.header__menu-button').toggleClass('header__menu-button--opened');
  $('.header__dropdown').toggleClass('header__dropdown--opened');
  $('body').toggleClass('no-scroll');
});

// $('.header__menu-link--submenu').click(function(){ // eslint-disable-line
//   $('.header__menu-link--submenu').toggleClass('header__menu-link--closed');
//   $('.header__submenu').toggle(300);
// });
