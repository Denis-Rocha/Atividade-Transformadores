const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const bola = new Bola(ctx,400,100,0,1);
const goleiro = new Goleiro(ctx,50,0);

var vex = 4;
var vey = 4;
var tbola = 0.01;

function campo(){
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#fff';

    //Gramado
    ctx.fillStyle = '#129e00';
    ctx.fillRect(0,0,1000,700);

    //Marca do penalti
    ctx.beginPath();
    ctx.arc(200,350,10,0,Math.PI*2);
    ctx.stroke();

    //Arco
    ctx.beginPath();
    ctx.arc(300,350,80,Math.PI*3/2,Math.PI/2);
    ctx.stroke();

    //Grande área
    ctx.beginPath();
    ctx.moveTo(0,100);
    ctx.lineTo(300,100);
    ctx.lineTo(300,600);
    ctx.lineTo(0,600);

    //Pequena área
    ctx.moveTo(0,200);
    ctx.lineTo(150,200);
    ctx.lineTo(150,500);
    ctx.lineTo(0,500);
    ctx.stroke();
}

function animacao(){
    ctx.clearRect(0,0,1000,700);

    // clip
    ctx.save();
    ctx.beginPath();
    ctx.arc(250,goleiro.y+20,300,0,Math.PI*2);
    ctx.stroke();
    ctx.clip();
    campo();
    bola.desenho();
    goleiro.desenho();
    ctx.restore();

    bola.movimento(vex,vey);
    if(bola.x >= 970){
        vex *= -1;
    }
    if(bola.y >= 670 || bola.y <= 30){
        vey *= -1;
    }

    bola.rotacao(0.06);

    bola.tamanho(tbola);
    if(bola.t >= 1.2 || bola.t <= 0.5){
        tbola *= -1;
    }

    //Colisao
    if(bola.x <= 180 && bola.x >= 100 && bola.y <= goleiro.y+80 
        && bola.y >= goleiro.y-40){
        vex *= -1;
        goleiro.inclix = 0.5;
        setTimeout(function(){
            goleiro.inclix = 0;
        },1000);
    }

    requestAnimationFrame(animacao);
}

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowDown'){
        goleiro.movimento(20);
    }
    if(event.key === 'ArrowUp'){
        goleiro.movimento(-20);
    }
});

animacao();