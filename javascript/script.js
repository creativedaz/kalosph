// Vanilla JavaScript Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav_ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});

// JQuery Image Mouse Hovers
$(document).ready(function () {
  // gallery img 01
  $("img.gallery_img-thumbnail-01").hover(
    function () {
      $("img.gallery_img-big-01").show();
    },
    function () {
      $("img.gallery_img-big-01").hide();
    }
  );

  $("img.gallery_img-thumbnail-01").mousemove(function (e) {
    $("img.gallery_img-big-01").css("top", e.pageY + 5);
    $("img.gallery_img-big-01").css("left", e.pageX + 5);
  });

  // gallery img 02
  $("img.gallery_img-thumbnail-02").hover(
    function () {
      $("img.gallery_img-big-02").show();
    },
    function () {
      $("img.gallery_img-big-02").hide();
    }
  );

  $("img.gallery_img-thumbnail-02").mousemove(function (e) {
    $("img.gallery_img-big-02").css("top", e.pageY + 5);
    $("img.gallery_img-big-02").css("left", e.pageX + 5);
  });

  // gallery img 03
  $("img.gallery_img-thumbnail-03").hover(
    function () {
      $("img.gallery_img-big-03").show();
    },
    function () {
      $("img.gallery_img-big-03").hide();
    }
  );

  $("img.gallery_img-thumbnail-03").mousemove(function (e) {
    $("img.gallery_img-big-03").css("top", e.pageY + 5);
    $("img.gallery_img-big-03").css("left", e.pageX + 5);
  });

  // gallery img 04
  $("img.gallery_img-thumbnail-04").hover(
    function () {
      $("img.gallery_img-big-04").show();
    },
    function () {
      $("img.gallery_img-big-04").hide();
    }
  );

  $("img.gallery_img-thumbnail-04").mousemove(function (e) {
    $("img.gallery_img-big-04").css("top", e.pageY + 5);
    $("img.gallery_img-big-04").css("left", e.pageX + 5);
  });

  // gallery img 05
  $("img.gallery_img-thumbnail-05").hover(
    function () {
      $("img.gallery_img-big-05").show();
    },
    function () {
      $("img.gallery_img-big-05").hide();
    }
  );

  $("img.gallery_img-thumbnail-05").mousemove(function (e) {
    $("img.gallery_img-big-05").css("top", e.pageY + 5);
    $("img.gallery_img-big-05").css("left", e.pageX + 5);
  });

  // gallery img 06
  $("img.gallery_img-thumbnail-06").hover(
    function () {
      $("img.gallery_img-big-06").show();
    },
    function () {
      $("img.gallery_img-big-06").hide();
    }
  );

  $("img.gallery_img-thumbnail-06").mousemove(function (e) {
    $("img.gallery_img-big-06").css("top", e.pageY + 5);
    $("img.gallery_img-big-06").css("left", e.pageX + 5);
  });

  // gallery img 07
  $("img.gallery_img-thumbnail-07").hover(
    function () {
      $("img.gallery_img-big-07").show();
    },
    function () {
      $("img.gallery_img-big-07").hide();
    }
  );

  $("img.gallery_img-thumbnail-07").mousemove(function (e) {
    $("img.gallery_img-big-07").css("top", e.pageY + 5);
    $("img.gallery_img-big-07").css("left", e.pageX + 5);
  });

  // gallery img 08
  $("img.gallery_img-thumbnail-08").hover(
    function () {
      $("img.gallery_img-big-08").show();
    },
    function () {
      $("img.gallery_img-big-08").hide();
    }
  );

  $("img.gallery_img-thumbnail-08").mousemove(function (e) {
    $("img.gallery_img-big-08").css("top", e.pageY + 5);
    $("img.gallery_img-big-08").css("left", e.pageX + 5);
  });
});

// Sticky Navbar
jQuery(window).scroll(function () {
  jQuery(".header_nav").toggleClass("fixed", jQuery(window).scrollTop() > 50);
});

// Fancybox
Fancybox.bind('[data-fancybox="_preview"]', {
  animated: false,
  showClass: false,
  hideClass: false,

  click: false,

  dragToClose: false,

  Image: {
    zoom: false,
  },

  Toolbar: {
    display: [{ id: "counter", position: "center" }, "close"],
  },
});
