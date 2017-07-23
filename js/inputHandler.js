function mouseUp(){
    mousePressed = false;
}

function mouseDown(){
    mouseClicked = true;
    mousePressed = true;
    setTimeout(function(){mouseClicked = false;}, 20);
}

c.addEventListener('mousemove', function(evt) {
    mousePos = getMousePos(c, evt);
    //console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
  }, false);

function getMousePos(c, evt) {
  var rect = c.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

c.addEventListener('mousewheel', function(e) {
    if(e.deltaY == 100){
      if(zoomFactor <= zoomMin){
        zoomFactor = zoomMin;
      }
      else{
        zoomFactor -= 1;
      }
      console.log(zoomFactor);
    }
    else if(e.deltaY == -100){
      if(zoomFactor >= zoomMax){
        zoomFactor = zoomMax;
      }
      else{
        zoomFactor += 1;
      }
        
      console.log(zoomFactor);
    }
  });