var c = document.getElementById("mapCanvas");
var ctx = c.getContext("2d");

window.onload = function() {
    //init function
    document.documentElement.style.overflow = 'hidden'; //disable scroll bars
    c.width = window.innerWidth; //set canvas width to window width
    c.height = window.innerHeight; //set canvas height to window height
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0, c.width, c.height);

    //init over
    mainLoop();
};

function mainLoop(){


     window.requestAnimationFrame(mainLoop);
}