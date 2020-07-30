function playIt(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) {
        return
    }

    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
    console.log(e.keyCode);
}

window.addEventListener("keydown", playIt)



function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}


const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));


const images = document.querySelectorAll("img");

// keys.forEach(key => key.addEventListener("click", function (e) {


//     const clickAudio = document.querySelectorAll(".clickAudio")
//     // console.log(audio);

//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//     // for (let i = 0; i < audios.length; i++) {

//     //     audios[i].currentTime = 0;
//     //     audios[i].play()
//     // }
//     let index = 0;

//     // for (let i = 0; i < keys.length; i++) {
//     //     keys.forEach(function (key) {
//     //         audios[i].currentTime = 0;
//     //         audios[i].play()
//     //     })
//     // }

//     // audios.forEach(audio => audio.play())
//     // if (!audio) {
//     //     return
//     // }

//     clickAudio[1].currentTime = 0;
//     clickAudio[1].play();

//     // const audio = document.querySelector(`audio[data-key]`);

//     this.classList.add("playing");
//     // console.log(audio);
//     console.log(clickAudio[0]);
//     // console.log(this);
// }));

const cowKey = document.querySelector(".key[data-key='65']");
const cowSound = document.querySelector("#cowSound");
const dogKey = document.querySelector(".key[data-key='83']");
const dogSound = document.querySelector("#dogSound");
const catKey = document.querySelector(".key[data-key='68']");
const catSound = document.querySelector("#catSound");
const chickenKey = document.querySelector(".key[data-key='70']");
const chickenSound = document.querySelector("#chickenSound");
const sheepKey = document.querySelector(".key[data-key='71']");
const sheepSound = document.querySelector("#sheepSound");


cowKey.addEventListener("click", () => {
    console.log('cowkey wciśnięty');
    cowSound.currentTime = 0;
    cowSound.play();
    cowKey.classList.add("playing");
})

dogKey.addEventListener("click", () => {
    dogSound.currentTime = 0;
    dogSound.play();
    dogKey.classList.add("playing");
})

catKey.addEventListener("click", () => {
    catSound.currentTime = 0;
    catSound.play();
    catKey.classList.add("playing");
})

chickenKey.addEventListener("click", () => {
    chickenSound.currentTime = 0;
    chickenSound.play();
    chickenKey.classList.add("playing");
})

sheepKey.addEventListener("click", () => {
    sheepSound.currentTime = 0;
    sheepSound.play();
    sheepKey.classList.add("playing");
})