class Goleiro{
    constructor(ctx, y, inclix){
        this.ctx = ctx;
        this.y = y;
        this.inclix = inclix;
    }

    desenho(){
        //transform
        this.ctx.transform(1, 0, this.inclix, 1, 100, this.y);
        this.ctx.fillStyle = '#dbbf72';
        this.ctx.fillRect(0,0,50,90);
        this.ctx.setTransform(1,0,0,1,0,0);
    }

    movimento(velogy){
        this.y += velogy

        if(this.y >= 590){
            this.y = 590;
        }
        if(this.y <= 0){
            this.y = 0;
        }
    }
}