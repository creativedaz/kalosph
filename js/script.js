// HAMBURGER MENU
var hamburger = document.getElementById("hamburger");
var navUL = document.getElementById("nav_ul");

$(hamburger).click(function() {
  navUL.classList.toggle("show");
});

// STICKY NAVBAR
jQuery(window).scroll(function () {
  jQuery(".header_nav").toggleClass("fixed", jQuery(window).scrollTop() > 50);
});