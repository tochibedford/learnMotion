import locomotiveScroll from 'locomotive-scroll';
import {animate} from 'motion';
import './css/locomotiveBase.css';
import './css/style.css';

const scrollCheckerbar = document.querySelector('.scrollCheckerBar');
const scroll = new locomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth:true
});

scroll.on('scroll', ({scroll})=>{
    scrollCheckerbar.style.width = `${100 * (scroll.y)/(document.body.offsetHeight - window.innerHeight)}%`;
});
