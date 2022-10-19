// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav_ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});

// STICKY NAVBAR
jQuery(window).scroll(function () {
  jQuery(".header_nav").toggleClass("fixed", jQuery(window).scrollTop() > 50);
});