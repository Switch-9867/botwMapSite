function map(){
    this.x = 0;
    this.y = 0;
    this.yOld = 0;
    this.xOld = 0;
    this.width = function(){
        return botwMapImg.width + (zoomFactor * zoomSpeed);
    }
    this.height = function(){
        return (botwMapImg.width + (zoomFactor * zoomSpeed))* 0.8334;
    };

    this.draw = function(){
        ctx.drawImage(botwMapImg, this.x, this.y, this.width(), this.height());
        //draw icons here
    };

    this.update = function(){
        //if(mousePressed){
        //    console.log(this.x + " 1");
        //    this.x = this.x + mouseDragged.x;
        //    this.y = this.y + mouseDragged.y;
        //    console.log(this.x + " 2");
        //    this.xOld = this.x;
        //    this.yOld = this.y;
        //    console.log(this.x + " 3");
        //}
        //else{
        //    this.x = this.xOld;
        //    this.y = this.yOld;
        //};

        this.x += mouseDragged.x;
        this.y += mouseDragged.y;
        
        //console.log(this.x + " " + this.y);
        this.draw();
    }
}