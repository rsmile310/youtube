$(document).ready(function () {
  const $slider = $("#slider");
  $slider
    .on("init", () => {
      mouseWheel($slider);
    })
    .slick({
      vertical: true,
      verticalSwiping: true,
      infinite: false,
      arrows: false,
      autoplay: false,
    });
  function mouseWheel($slider) {
    $(window).on("wheel", { $slider: $slider }, mouseWheelHandler);
  }
  function mouseWheelHandler(event) {
    event.preventDefault();
    const $slider = event.data.$slider;
    const delta = event.originalEvent.deltaY;
    if (delta > 0) {
      $slider.slick("slickPrev");
    } else {
      $slider.slick("slickNext");
    }
  }
});
