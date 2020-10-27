$(function(){ // eslint-disable-line
  $('.promo__button').on('click', function(e){ // eslint-disable-line
    $('html,body').stop().animate({ scrollTop: $('#advantages').offset().top }, 1000);
    e.preventDefault();
  });
});
