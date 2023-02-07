let dino = document.querySelector(".dino");
let block = document.querySelector(".block");
let road = document.querySelector(".road");
let cloud = document.querySelector(".cloud");
let score = document.querySelector(".score");
let variable = document.querySelector(":root");
let gameover = document.querySelector(".gameover");

let playerScore = 0;
function scorenum() {
  playerScore++;
  score.innerHTML = `Score <b>${playerScore}</b>`;
  if(playerScore>73){
    variable_change();
  }
}

function variable_change(){
  variable.style.setProperty('--speed','1.6s');
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
window.addEventListener("keydown", (eve) => {
  if (eve.code == "Space") {
    if (!block.classList.contains("animateblock")) {
      block.classList.add("animateblock");
      variable.style.setProperty('--speed','2.5s');
      road.classList.add("animateroad");
      cloud.classList.add("animatecloud");
      score_interval = setInterval(scorenum, 200);
      document.querySelector(".gameover").innerHTML = "";
    } else if (gameover.innerHTML == "Game Over") {
      console.log("is it working")
      block.classList.remove("animateblock")
      road.classList.remove("animateroad")
      cloud.classList.remove("animatecloud")

      block.style.animationPlayState = 'running'
      road.style.animationPlayState = 'running'
      cloud.style.animationPlayState = 'running'

      playerScore = 0
      score.innerHTML = `Score <b>${playerScore}</b>`
      document.querySelector(".gameover").innerHTML = ""
      block.offsetWidth

      block.classList.add("animateblock")
      variable.style.setProperty('--speed', '2.5s')
      road.classList.add("animateroad")
      cloud.classList.add("animatecloud")
      score_interval = setInterval(scorenum, 200)

    }
  }
});

setInterval(() => {
  let blockleft = parseInt(getComputedStyle(block).getPropertyValue("left"));
  let dinobottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
  if (blockleft>-60 && blockleft < 80 && dinobottom < 100) {
    block.style.animationPlayState = 'paused';
    road.style.animationPlayState = 'paused';
    cloud.style.animationPlayState = 'paused';

    clearInterval(score_interval);
    playerScore = 0;
    document.querySelector(".gameover").innerHTML = "Game Over";
  }
}, 20);
