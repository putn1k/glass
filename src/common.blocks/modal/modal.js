$('.modal__open').click(function(){ // eslint-disable-line
  $('.modal').fadeIn(400);
  $('.modal__window').addClass('modal--showed');
});
$('.modal__close').click(function(){ // eslint-disable-line
  $('.modal').fadeOut(400);
  $('.modal__window').removeClass('modal--showed');
});
