$(function(){
  // hambuger menu
  var imgHeight = $('.kv-wrapper').outerHeight();
  var bgHeight = $('.fv').outerHeight();

  $(".burger-btn").on('click',function(){
    if ($(window).scrollTop() < imgHeight -50){ //burger-btnがkvより上（white）のとき
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }else {
      // burger-btnがfvより下(black)のとき
      $(".burger-btn").toggleClass('black');
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });
  // scroll
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight -50){
      $('.site-title').removeClass('black');
    }else {
      $('.site-title').addClass('black');
    } 

    if ($(window).scrollTop() < bgHeight -50){
      $('.burger-btn').removeClass('black');
    }else {
      $('.burger-btn').addClass('black');
    }
  });
});