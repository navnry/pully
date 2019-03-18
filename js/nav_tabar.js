$('.menu').click(function () {
    $('.menu').toggleClass('menu_se');
    $('.nav').toggleClass('nav-show');
});
$("#to_top").click(function () {
    $('html , body').animate({scrollTop: 0}, 'slow');
})
