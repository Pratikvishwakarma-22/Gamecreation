const dino = document.querySelector(".dino");
const block = document.querySelector(".block");
const bird = document.querySelector(".bird");
const road = document.querySelector(".road");
const cloud = document.querySelector(".cloud");
const score = document.querySelector(".score");
const variable = document.querySelector(":root");
const gameover = document.querySelector(".gameover");

let interval = 1100;

function findrandom() {
  const nums = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0];
  let randomnum = Math.floor(Math.random() * nums.length);
  console.log(randomnum);
  console.log(nums[randomnum]);
  if (nums[randomnum] == 1) {
    block.classList.add("animateblock");
    bird.classList.remove("animatebird");
  } else {
    bird.classList.add("animatebird");
    block.classList.remove("animateblock");
  }
}

let playerScore = 0;
function scorenum() {
  playerScore++;
  score.innerHTML = `Score <b>${playerScore}</b>`;
}
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
let count = 0;
window.addEventListener("keydown", (eve) => {
  if (eve.code == "Space") {
    if (
      !block.classList.contains("animateblock") &&
      !bird.classList.contains("animatebird") &&
      count < 1
    ) {
      console.log("donot come here");
      count++;
      road.classList.add("animateroad");
      cloud.classList.add("animatecloud");
      block_interval = setInterval(findrandom, interval);
      score_interval = setInterval(scorenum, 200);
      document.querySelector(".gameover").innerHTML = "";
    } else if (gameover.innerHTML == "Game Over") {
      block.classList.remove("animateblock");
      road.classList.remove("animateroad");
      cloud.classList.remove("animatecloud");
      bird.classList.remove("animatebird");

      block.style.animationPlayState = "running";
      road.style.animationPlayState = "running";
      cloud.style.animationPlayState = "running";
      dino.style.animationPlayState = "running";
      bird.style.animationPlayState = "running";
      playerScore = 0;

      score.innerHTML = `Score <b>${playerScore}</b>`;
      document.querySelector(".gameover").innerHTML = "";
      road.classList.add("animateroad");
      cloud.classList.add("animatecloud");
      block_interval = setInterval(findrandom, interval);
      score_interval = setInterval(scorenum, 200);
    }
  }
});

setInterval(() => {
  let blockleft = parseInt(getComputedStyle(block).getPropertyValue("left"));
  let dinobottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
  let birdleft = parseInt(getComputedStyle(bird).getPropertyValue("left"));

  if (
    (blockleft > -60 && blockleft < 80 && dinobottom < 100) ||
    (dinobottom > 50 && dinobottom > 120 && birdleft < 100 && birdleft > -60)
  ) {
    block.style.animationPlayState = "paused";
    road.style.animationPlayState = "paused";
    cloud.style.animationPlayState = "paused";
    dino.style.animationPlayState = "paused";
    bird.style.animationPlayState = "paused";

    clearInterval(block_interval);
    clearInterval(score_interval);

    playerScore = 0;
    document.querySelector(".gameover").innerHTML = "Game Over";
  }
}, 20);
