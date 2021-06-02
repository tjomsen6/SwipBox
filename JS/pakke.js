const slideBtn = document.querySelector(".box__slide");
const video = document.querySelector('.box__view__video');
const swipeTxt = document.querySelector('.box__swipe__text');
const swipteBtn = document.querySelector('.box__swipe');
const videoLoop = document.querySelector('.box__view__video__loop');
const videoEnd = document.querySelector('.box__view__video__end');
const aTag = document.createElement('a');
aTag.setAttribute('href', 'home.html');



setTimeout(function () {
    video.style.display = "none";
    slideBtn.style.visibility = "visible";
    swipeTxt.textContent = "Åben låge";
    swipteBtn.classList.add('ready');
    swipeTxt.classList.add('ready');


}, 1800);

slideBtn.addEventListener("click", function () {
    this.style.left = "79%";
    swipeTxt.textContent = "3";

    setTimeout(function () {
        swipeTxt.textContent = "2";
    }, 1000);

    setTimeout(function () {
        videoLoop.style.display = "none";
        videoEnd.play();
        swipeTxt.textContent = "1";
    }, 2000);

    setTimeout(function () {
        slideBtn.style.visibility = "hidden";
        swipeTxt.textContent = "Færdig";
        swipteBtn.classList.remove('ready');
        swipteBtn.classList.add('endBtn');
        swipeTxt.appendChild(aTag);
    }, 3000);

});
