function mouseUp(){
    mousePressed = false;
    mouseUpLocation = mousePos;
}

function mouseDown(){
    mouseClicked = true;
    mousePressed = true;
    mouseClickLocation = mousePos;
    setTimeout(function(){mouseClicked = false;}, 20);
}


function getMousePos(c, evt) {
  var rect = c.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

