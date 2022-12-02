$(function () {
  $(".header__menu-button__wrapper ").on("click", function () {
    $(".modal-menu").toggle();

  });


  $('.categories__item-img').on("click", function (event) {
    var src = $(this).attr('src');

    $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + src + '"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
      left: ($(document).width() - $('#magnify').outerWidth()) / 2,
      // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
      top: ($(window).height() - $('#magnify').outerHeight()) / 2
    });
    $('#overlay, #magnify').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function (event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function () {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });

})

