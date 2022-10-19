// INITIALIZE GALLERY
Fancybox.bind('[data-fancybox="gallery_preview"]', {
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
