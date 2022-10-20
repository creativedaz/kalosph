  // FUNCTIONS
  function getStyle(el, styleProp) {
    var value, defaultView = el.ownerDocument.defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp];
      // convert other units to pixels on IE
      if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
        return (function(value) {
          var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = el.style.pixelLeft + "px";
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        })(value);
      }
      return value;
    }
  }
  
  // HAMBURGER MENU
  var hamburger = document.getElementById("hamburger");
  var navUL = document.getElementById("nav_ul");
  
  $("#hamburger").click(function() {

    // CHECK THE NAV UL DISPLAY PROPERTY
    var style = getStyle(navUL, "display");

    // WHEN TOGGLE
    $("#nav_ul").slideToggle(function() {
      
      // CHECK IF THE DISPLAY PROPERTY IS NONE, IF YES, REMOVE IT. ELSE, MAKE IT DISPLAY: BLOCK
      if (style !== "none") {
        // console.log("none");
        $("#nav_ul").removeAttr("style", "display");
      } else {
        // console.log("block");
        $("#nav_ul").attr("style", "display:block");
      }
    });
    
  });
  
  // STICKY NAVBAR
  jQuery(window).scroll(function () {
    jQuery(".header_nav").toggleClass("fixed", jQuery(window).scrollTop() > 50);
  });