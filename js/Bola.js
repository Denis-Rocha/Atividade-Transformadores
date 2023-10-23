class Bola{
    constructor(ctx,x,y,r,t){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = r;
        this.t = t;
    }

    desenho(){
        //translate, rotate e scale
        this.ctx.translate(this.x, this.y)
        this.ctx.rotate(this.r)
        this.ctx.scale(this.t,this.t);

        //bola
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 30, 0, Math.PI*2);
        this.ctx.fillStyle = '#fff';
        this.ctx.fill();

        //detalhes
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = '#000';
        this.ctx.moveTo(-30,0);
        this.ctx.lineTo(30,0);
        this.ctx.stroke();

        this.ctx.moveTo(0,-20);
        this.ctx.lineTo(0,20);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(-8,-7,15,15);

        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(-8,20,15,10);

        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(-8,-30,15,10);

        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(-30,-7,10,15);

        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(20,-7,10,15);

        this.ctx.setTransform(1,0,0,1,0,0);
    }

    movimento(vex, vey){
        this.x += vex;
        this.y += vey;

        if(this.x <= 30){
            this.x = 900;
        }
    }

    rotacao(ver){
        this.r += ver;
        if(this.r >= 6.2){
            this.r = 0;
        }
    }

    tamanho(vt){
        this.t += vt;
    }
}