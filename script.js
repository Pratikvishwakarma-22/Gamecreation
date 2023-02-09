
let dino = document.querySelector("#dino")

//dino jumping code
window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {
        if(!dino.classList.contains("animatedino")){
            dino.classList.add("animatedino");

            setTimeout(() => {
                dino.classList.remove("animatedino");
            }, 500);

        }
    }
});

