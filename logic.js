const runner = document.getElementById("runner");
const villen = document.getElementById("villen");
const gameOverMessage = document.getElementById("gamoverMessage")

document.onkeydown = function(e) {
    // console.log("key code: ", e.keyCode)

    if (e.keyCode == 38) {
        runner.classList.add('animaRunner');

        setTimeout(() => {
            runner.classList.remove('animaRunner');
        },1000)
    }
    if (e.keyCode == 39) {
        let runnerX = parseInt(window.getComputedStyle(runner, null).getPropertyValue('left'));
        runner.style.left =(runnerX + 150) + "px";
    }
    if (e.keyCode == 37) {
        let runnerY = parseInt(window.getComputedStyle(runner, null).getPropertyValue('left'));
        runner.style.left =(runnerY - 150) + "px";
    }
}


setInterval(() => {
    let rx = parseInt(window.getComputedStyle(runner, null).getPropertyValue('left'));
    let ry = parseInt(window.getComputedStyle(runner, null).getPropertyValue('bottom'));
    let vx = parseInt(window.getComputedStyle(villen, null).getPropertyValue('left'));
    let vy = parseInt(window.getComputedStyle(villen, null).getPropertyValue('bottom'));
    let offsetX  = Math.abs(rx-vx);
    let offsetY =  Math.abs(ry-vy)
    if (offsetX<93 && offsetY<52) {
        gameOverMessage.style.display = 'flex'
        villen.classList.remove('villenAni')
    }
},100)