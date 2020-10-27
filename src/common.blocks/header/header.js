$('.header__menu-button').click(function(){ // eslint-disable-line
  $('.header__menu-button').toggleClass('header__menu-button--opened');
  $('.header__dropdown').toggleClass('header__dropdown--opened');
  $('body').toggleClass('no-scroll');
});

$('.header__submenu-button').click(function(){ // eslint-disable-line
  $('.header__submenu-button').toggleClass('header__submenu-button--closed');
  $('.header__submenu').toggle(300);
});
