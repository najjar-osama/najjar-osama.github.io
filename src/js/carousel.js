import Flickity from "flickity";

const initCarousel = () => {
  const projectsCarouselWrapper = document.getElementById("projectsCarousel");
  const carousel = new Flickity(projectsCarouselWrapper, {
    cellAlign: "center",
    contain: true
  });
};

export default initCarousel;
