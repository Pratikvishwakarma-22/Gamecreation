let dino = document.querySelector("#dino");
let block = document.querySelector(".block");
let road = document.querySelector(".road");
let cloud = document.querySelector(".cloud");

//dino jumping code
window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    if (!dino.classList.contains("animatedino")) {
      dino.classList.add("animatedino");

      setTimeout(() => {
        dino.classList.remove("animatedino");
      }, 500);
    }
  }
});

//block animation and starting of game
window.addEventListener("keydown", (eve) => {
  if (eve.code == "Space") {
    if (!block.classList.contains("animateblock")) {
      block.classList.add("animateblock");
      road.classList.add("animateroad");
      cloud.classList.add("animatecloud");
    }
  }
});
