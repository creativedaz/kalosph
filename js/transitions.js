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
    // REINITIALIZE app.css at <head></head>
    // const linkDOMAppsCss = document.getElementsByTagName("head")[0];
    // const newLinkAppsCss = document.createElement("link");
    // const oldLinkAppsCss = document.querySelector(".app-css");
    // newLinkAppsCss.rel = "stylesheet";
    // newLinkAppsCss.type = "text/css";
    // newLinkAppsCss.href = "css/app.css";
    // newLinkAppsCss.className = "app-css";
    // oldLinkAppsCss.remove();
    // linkDOMAppsCss.appendChild(newLinkAppsCss);
    // console.log(newLinkAppsCss); // CHECK RESULT

    // REINITIALIZE  at /js/custom-cursor.js <script></script>
    const scriptDOMCustomCursor = document.getElementsByTagName("body")[0];
    const newScriptCustomCursor = document.createElement("script");
    const oldScriptCustomCursor = document.querySelector(".custom-cursor");
    newScriptCustomCursor.src = "js/custom-cursor.js";
    newScriptCustomCursor.className = "custom-cursor";
    oldScriptCustomCursor.remove();
    scriptDOMCustomCursor.appendChild(newScriptCustomCursor);
    // console.log(newScriptCustomCursor); // CHECK RESULT

    // REINITIALIZE https://cdnjs.cloudflare.com/ajax/libs/fancyapps-ui/4.0.31/fancybox.umd.js at <script></script>
    // const scriptDOMExtFancyApps = document.getElementsByTagName("body")[0];
    // const newScriptExtFancyApps = document.createElement("script");
    // const oldScriptExtFancyApps = document.querySelector(".ext_fancyapps");
    // newScriptExtFancyApps.src = "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js";
    // newScriptExtFancyApps.className = "ext_fancyapps";
    // oldScriptExtFancyApps.remove();
    // scriptDOMExtFancyApps.appendChild(newScriptExtFancyApps);
    // console.log(newScriptExtFancyApps); // CHECK RESULT

    // REINITIALIZE /js/fancy-image_slider.js at <script></script>
    const scriptDOMFancyImageSlider = document.getElementsByTagName("body")[0];
    const newScriptFancyImageSlider = document.createElement("script");
    const oldScriptFancyImageSlider = document.querySelector(".fancy-image_slider");
    newScriptFancyImageSlider.src = "js/fancy-image_slider.js";
    newScriptFancyImageSlider.className = "fancy-image_slider";
    oldScriptFancyImageSlider.remove();
    scriptDOMFancyImageSlider.appendChild(newScriptFancyImageSlider);
    // console.log(newScriptFancyImageSlider); // CHECK RESULT
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
});
