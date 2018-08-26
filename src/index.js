import "./images/science_pattern.png";
import "./images/arabic_pattern.png";
import "./images/intro_bg.png";
import "./images/me_1.jpg";
import "./images/favicon.png";
import "./images/pattern_transparent_4.png";
import "./images/github.png";
import "./images/link.png";
import "./images/mx_pwa.png";
import "./images/mx_camera.png";
import "./images/roboless.png";
import "./images/mx_cke.png";
import "./styles.scss";
import "../node_modules/normalize.scss/normalize.scss";
import $ from "jquery";
import "./js/scrollit.js";
import setScrollHandler from "./js/scroll";
import "../node_modules/flickity/css/flickity.css";
import { load } from "./js/load";
import initCarousel from "./js/carousel";
//import setScrollHandler from "./js/scroll";



load();
setScrollHandler();
initCarousel();
$(function(){
    $.scrollIt({
        upKey: 38,             // key code to navigate to the next section
        downKey: 40,           // key code to navigate to the previous section
        easing: 'linear',      // the easing function for animation
        scrollTime: 600,       // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: 0           // offste (in px) for fixed top navigation
      });
});