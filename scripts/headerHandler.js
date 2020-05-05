$(document).ready(() => {
  let clicked = false;
  $(".header__toggle").click(function () {
    clicked = !clicked;
    $(this).toggleClass("header__toggle_open");
    $(".header__menu").slideToggle().css("display", "grid");
  });
  $(".header").click((e) => {
    e.stopPropagation();
  });
  $(document).click(() => {
    if (clicked) {
      clicked = !clicked;
      $(".header__menu").slideToggle("normal");
      $(".header__toggle").toggleClass("header__toggle_open");
    }
  });
});
