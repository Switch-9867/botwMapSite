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
        if(mousePressed){
            this.x = this.xOld + mouseDragged.x;
            this.y = this.yOld + mouseDragged.y;
        }
        else{
            this.xOld = this.x;
            this.yOld = this.y;
            this.x = this.xOld;
            this.y = this.yOld;
        };
        
        //console.log(this.x + " " + this.y);
        this.draw();
    }
}