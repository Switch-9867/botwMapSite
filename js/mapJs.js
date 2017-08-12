function map(){
    this.x = 0;
    this.y = 0;
    this.yOld = 0;
    this.xOld = 0;
    this.sWidth = 31;
    this.sHeight = 31;
    this.width = function(){
        return 5000 + (zoomFactor * zoomSpeed) * zoomMul;
    };
    this.height = function(){
        return (5000 + (zoomFactor * zoomSpeed)* zoomMul)* 0.8334;
    };

    this.draw = function(){
        if(zoomFactor < 0){
            ctx.drawImage(botwMapImgFull, this.x , this.y , this.width(), this.height());
            //console.log("drew full");
        }
        else{
            for (x = 0; x < this.sWidth +1; x++) { 
                for (y = 0; y < this.sHeight +1; y++) {
                    //super dirty and annoying code to locate each peice of the map and draw it
                    if(x*(this.width()/31)+this.x > -this.width()/31 && x*(this.width()/31)+this.x < c.width && y*(this.height()/31)+this.y > -this.height()/31 && y*(this.height()/31)+this.y < c.height){
                        ctx.drawImage(botwMapImg[x][y], (x*(this.width()/31)+this.x), (y*(this.height()/31))+this.y, this.width()/31, this.height()/31);
                    }
                }
            }
            //console.log("drew smol");
        }
        
        
        
        
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