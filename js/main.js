var c = document.getElementById("mapCanvas");
var ctx = c.getContext("2d");

var mouseClickLocation = {};
var mouseUpLocation = [];
var mousePos = {};
var mousePressed = false;
var mouseDragged = {x:0,y:0};

var botwMap = new map();

window.onresize = function(){
    c.width = window.innerWidth; //set canvas width to window width
    c.height = window.innerHeight; //set canvas height to window height
    ctx.fillStyle = "#000000"; //set color black
    ctx.fillRect(0,0, c.width, c.height); //clear screen
}

c.addEventListener('mousemove', function(evt) {
    mousePos = getMousePos(c, evt);
    //console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
  }, false);
c.addEventListener('mousewheel', function(e) {
    if(e.deltaY == 100){
      if(zoomFactor <= zoomMin){
        zoomFactor = zoomMin;
      }
      else{
        zoomFactor -= 1;
      }
      //console.log(zoomFactor);
    }
    else if(e.deltaY == -100){
      if(zoomFactor >= zoomMax){
        zoomFactor = zoomMax;
      }
      else{
        zoomFactor += 1;
      }
        
      //console.log(zoomFactor);
    }
  });

var zoomFactor = 0;
var zoomSpeed = 100;
var zoomMax = 100;
var zoomMin = -40;

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

    if(mousePressed){
        mouseDragged = subtractPos(mousePos, mouseClickLocation);
    }

    botwMap.update();
    //console.log(mousePos);

    window.requestAnimationFrame(mainLoop);
}

function subtractPos(pos1, pos2){
    return{
        x: pos1.x - pos2.x,
        y: pos1.y - pos2.y
    }

}
function addPos(pos1, pos2){
    return{
        x: pos1.x + pos2.x,
        y: pos1.y + pos2.y
    }

}

function drawImageGrid(xPos,yPos,width,height){
    return
}