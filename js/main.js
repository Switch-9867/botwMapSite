var c = document.getElementById("mapCanvas");
var ctx = c.getContext("2d");

var zoomFactor = 0;
var zoomSpeed = 100;
var zoomMax = 100;
var zoomMin = -31;

var botwMapImg = document.getElementById("botwMapImg");

window.onload = function() {
    setTimeout(init, 5000); // wait 5 secconds 
};

function init(){
    //init function
    document.documentElement.style.overflow = 'hidden'; //disable all scroll bars
    c.width = window.innerWidth; //set canvas width to window width
    c.height = window.innerHeight; //set canvas height to window height
    ctx.fillStyle = "#000000"; //set color black
    ctx.fillRect(0,0, c.width, c.height); //clear screen

    //init over
    mainLoop();//call main loop
}

function mainLoop(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0, c.width, c.height);

    ctx.drawImage(botwMapImg, 0, 0, botwMapImg.width + (zoomFactor * zoomSpeed), (botwMapImg.width + (zoomFactor * zoomSpeed))* 0.8334);

    window.requestAnimationFrame(mainLoop);
}