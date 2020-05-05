$(document).ready(() => {
  $(".header__toggle").click(function () {
    $(this).toggleClass("header__toggle_open");
    $(".header__menu").slideToggle();
    $(".header__menu").css('display','grid');
  });
});
