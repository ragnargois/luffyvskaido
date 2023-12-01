const btnEl = document.querySelector(".watch");
const closeIconEl = document.querySelector(".fa-xmark");
const trailerContainerEl = document.querySelector(".trailer-container");
const video = document.querySelector("video");

btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
  video.play();
});

closeIconEl.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  video.pause();
});