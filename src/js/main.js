import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";



window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let slider = tns({
        container: '.main__slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        autoplayHoverPause: true,
        autoplayButtonOutput: false,
        controlsPosition: "bottom",
        controlsText: "none",
        navPosition: "bottom",
       
        speed: 200
        
    });


});