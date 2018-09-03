const setScrollHandler = () => {
  const scrollStep = document.body.clientHeight;
  if (!window.lastScrollStep) {
    window.lastScrollStep = window.scrollY;
  }
  window.addEventListener("scroll", e => {
    //e.preventDefault(); // does nothing becasue the event is not cancelable
    const nav = document.getElementById("nav");
    if (window.scrollY > window.lastScrollStep) {
      if (!Number.isInteger(window.scrollY / window.lastScrollStep)) {
        window.lastScrollStep = window.lastScrollStep + scrollStep;
        nav.classList.add("nav--dark");
        document.body.classList.add("to-top-visible");
      }
      
    } else {
      window.lastScrollStep = window.lastScrollStep - scrollStep;
      if(window.scrollY === 0){
        nav.classList.remove("nav--dark");
        document.body.classList.remove("to-top-visible");
      }
     
      
    } 
  });
};

export default setScrollHandler;
