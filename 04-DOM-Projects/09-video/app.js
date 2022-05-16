// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const videoArea = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");

btn.addEventListener("click", function () {
    btn.classList.toggle("slide");
    if (btn.classList.contains("slide")) {
        videoArea.pause();
        return;
    }
    videoArea.play();
});

// disable preloader after video loads
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
});
