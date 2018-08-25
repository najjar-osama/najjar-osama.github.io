import Flickity from "flickity";

const initCarousel = () => {
  const carouselNode = document.getElementById("main-carousel");
  const carousel = new Flickity(carouselNode, {
    // options
    cellAlign: "left",
    contain: true
  });
};

export default initCarousel;
