// FUNCTION delay();
function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

// FUNCTION pageTransition();
function pageTransition() {
  var tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 1,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
    duration: 1.5,
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.5,
  });
  tl.set(".loading-screen", { left: "-100%" });
}

// WHEN PAGE LOADS
$(function () {
  // DO THIS BEFORE TRANSITION
  barba.hooks.beforeEnter(() => {
    // SCROLL TO TOP OF THE CURRENT PAGE
    $(window).scrollTop(0);

    // REINITIALIZE app.css at <head></head> to reload the app.css
    // var linkDOMAppsCss = document.getElementsByTagName("head")[0];
    // var newLinkAppsCss = document.createElement("link");
    // var oldLinkAppsCss = document.querySelector(".app-css");
    // newLinkAppsCss.rel = "stylesheet";
    // newLinkAppsCss.type = "text/css";
    // newLinkAppsCss.href = "css/app.css";
    // newLinkAppsCss.className = "app-css";
    // oldLinkAppsCss.remove();
    // linkDOMAppsCss.appendChild(newLinkAppsCss);
    // console.log(newLinkAppsCss); // CHECK RESULT

    // REINITIALIZE js/custom-cursor.js at <script></script> to make custom cursor working
    var scriptDOMCustomCursor = document.getElementsByTagName("body")[0];
    var newScriptCustomCursor = document.createElement("script");
    var oldScriptCustomCursor = document.querySelector(".custom-cursor");
    newScriptCustomCursor.src = "js/custom-cursor.js";
    newScriptCustomCursor.className = "custom-cursor";
    oldScriptCustomCursor.remove();
    scriptDOMCustomCursor.appendChild(newScriptCustomCursor);
    // console.log(newScriptCustomCursor);

    // REINITIALIZE js/fancy-image_slider.js at <script></script> to make fancy image slider working
    var scriptDOMFancyImageSlider = document.getElementsByTagName("body")[0];
    var newScriptFancyImageSlider = document.createElement("script");
    var oldScriptFancyImageSlider = document.querySelector(".fancy-image_slider");
    newScriptFancyImageSlider.src = "js/fancy-image_slider.js";
    newScriptFancyImageSlider.className = "fancy-image_slider";
    oldScriptFancyImageSlider.remove();
    scriptDOMFancyImageSlider.appendChild(newScriptFancyImageSlider);
    // console.log(newScriptFancyImageSlider);

    // REINITIALIZE js/fancy-hero_carousel.js at <script></script> to make fancy hero carousel working
    var scriptDOMFancyHeroCarousel = document.getElementsByTagName("body")[0];
    var newScriptFancyHeroCarousel = document.createElement("script");
    var oldScriptFancyHeroCarousel = document.querySelector(".fancy-hero_carousel");
    newScriptFancyHeroCarousel.src = "js/fancy-hero_carousel.js";
    newScriptFancyHeroCarousel.className = "fancy-hero_carousel";
    oldScriptFancyHeroCarousel.remove();
    scriptDOMFancyHeroCarousel.appendChild(newScriptFancyHeroCarousel);
    console.log(newScriptFancyHeroCarousel);
  });
  // INITIALIZE TRANSITION
  barba.init({
    async: true,
    prevent: ({ el }) =>
      el.classList && el.classList.contains("prevent-barba"),
    transitions: [
      {
        async leave() {
          const done = this.async();
          pageTransition();
          await delay(2000);
          done();
        },
      },
    ],
  });
  barba.hooks.after(() => {
    // REINITIALIZE js/script.js at <script></script> to make hamburger button working
    var scriptDOMScriptJs = document.getElementsByTagName("body")[0];
    var newScriptScriptJs = document.createElement("script");
    var oldScriptScriptJs = document.querySelector(".script-js");
    newScriptScriptJs.src = "js/script.js";
    newScriptScriptJs.className = "script-js";
    oldScriptScriptJs.remove();
    scriptDOMScriptJs.appendChild(newScriptScriptJs);
    // console.log(newScriptScriptJs);
  });
});
