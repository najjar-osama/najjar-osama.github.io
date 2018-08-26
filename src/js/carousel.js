import Flickity from "flickity";

const initCarousel = () => {
  const projectsCarouselWrapper = document.getElementById("projectsCarousel");
  const carousel = new Flickity(projectsCarouselWrapper, {
    autoPlay: 3000,
    cellAlign: "center",
    contain: true,
    pauseAutoPlayOnHover: true,
    freeScroll : true,
    wrapAround : true
  });
};

export default initCarousel;
