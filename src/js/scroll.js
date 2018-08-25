const setScrollHandler = () => {
  const scrollStep = document.body.clientHeight;
  if (!window.lastScrollStep) {
    window.lastScrollStep = window.scrollY;
  }
  window.addEventListener("scroll", e => {
    e.preventDefault(); // does nothing becasue the event is not cancelable
    const nav = document.getElementById("nav");
    if (window.scrollY > window.lastScrollStep) {
      if (!Number.isInteger(window.scrollY / window.lastScrollStep)) {
        window.lastScrollStep = window.lastScrollStep + scrollStep;
        nav.classList.add("nav--dark");
      }
    } else {
      if (!Number.isInteger(window.scrollY / window.lastScrollStep)) {
      }
      window.lastScrollStep = window.lastScrollStep - scrollStep;
      window.scrollY === 0 ? nav.classList.remove("nav--dark") : nav;
    }
  });
};

export default setScrollHandler;
