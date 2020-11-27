import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/index.scss";
import "@fortawesome/fontawesome-free/js/all.min.js"

let hero = document.querySelector('.navbar');
let topScroll = document.getElementById('top-scroll');
window.addEventListener('scroll', () => {
    if(window.scrollY > hero.scrollHeight) {
        topScroll.classList.add('top-scroll-view')
    } else {
        topScroll.classList.remove('top-scroll-view')
    }
});