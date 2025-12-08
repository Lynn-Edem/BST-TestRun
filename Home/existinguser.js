let track = document.getElementById("cw-track");
let leftBtn = document.getElementById("cw-left");
let rightBtn = document.getElementById("cw-right");

rightBtn.addEventListener("click", () => {
  track.scrollBy({
    left: 200,
    behavior: "smooth",
  });
});

leftBtn.addEventListener("click", () => {
  track.scrollBy({
    left: -200,
    behavior: "smooth",
  });
});

document.getElementById("happy").addEventListener("click", function() {
  window.location.href = "../Movie themes/mood.html";
});