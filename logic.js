// const musicElem = document.getElementById("music");
let music = new Audio('music.mp3');
let gamOverMusic = new Audio('gameover.mp3')
// musicElem.appendChild(music)


const runner = document.getElementById("runner");
const villen = document.getElementById("villen");
const gameOverMessage = document.getElementById("gamoverMessage")
const showingSocore = document.querySelector(".showingSocore");

let score = 0;
let cross = true;

setTimeout(() => {
    music.play()
},1000)

document.onkeydown = function (e) {
    // console.log("key code: ", e.keyCode)

    if (e.keyCode == 38) {
        runner.classList.add('animaRunner');

        setTimeout(() => {
            runner.classList.remove('animaRunner');
        }, 1000)
    }
    if (e.keyCode == 39) {
        let runnerX = parseInt(window.getComputedStyle(runner, null).getPropertyValue('left'));
        runner.style.left = (runnerX + 150) + "px";
    }
    if (e.keyCode == 37) {
        let runnerY = parseInt(window.getComputedStyle(runner, null).getPropertyValue('left'));
        runner.style.left = (runnerY - 150) + "px";
    }
}

function startGame() {
    setTimeout(() => {
        villen.classList.add("villenAni");
        gameOverSetInterval();
    }, 1000)
}

startGame()

const gameOverSetInterval = () => {

    const gameOverPurpuse = setInterval(() => {
        let rx = parseInt(window.getComputedStyle(runner, null).getPropertyValue('left'));
        let ry = parseInt(window.getComputedStyle(runner, null).getPropertyValue('bottom'));
        let vx = parseInt(window.getComputedStyle(villen, null).getPropertyValue('left'));
        let vy = parseInt(window.getComputedStyle(villen, null).getPropertyValue('bottom'));
        let offsetX = Math.abs(rx - vx);
        let offsetY = Math.abs(ry - vy)

        if (offsetX < 100 && offsetY < 52) {
            villen.classList.remove('villenAni')

            clearTimeout(gameOverPurpuse)
            
            window.addEventListener("click", () => {
                location.reload()
            })

            music.pause()
            gamOverMusic.play()
            setTimeout(() => {
                gamOverMusic.pause()
            },1000)
            
        }
        else if (offsetX < 50 && cross) {
            score++;
            showingSocore.innerHTML = `Score ${score}`;
            cross = false;
            setTimeout(() => {
                cross = true;
            },1000)

            setTimeout(() => {
                const villenAniDur = parseFloat(window.getComputedStyle(villen, null).getPropertyValue('animation-duration'))
                let newDuration = villenAniDur + .1;
                villen.style.animationDuration = newDuration + 's';
            },1000)
        }
    }, 10)
}
