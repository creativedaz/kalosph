// INITIALIZE CAROUSEL
var mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: false,
});

// INITIALIZE THUMBNAILS
var thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
  Sync: {
    target: mainCarousel,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  slidesPerPage: 1,
  infinite: false,
});

// CUSTOMIZE CAROUSEL
Fancybox.bind('[data-fancybox="carousel"]', {
  dragToClose: false,
  click: false,
  Carousel: {
    on: {
      change: (that) => {
        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
  Toolbar: {
    display: [{ id: "counter", position: "center" }, "close"],
  },
});

