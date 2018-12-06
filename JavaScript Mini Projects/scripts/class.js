let canvas, ctx, w, h;
let mousePos;
let balls = [];

let player = {
    x : 10,
    y : 10,
    color : 'red',
    width : 30,
    height : 30,
    speed : 2,
    draw : function(ctx){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.restore();
    },
    move : function(x,y){
        if(mousePos !== undefined){
        this.x = x;
        this.y = y;
        }
    }
}

class Ball{
    constructor(x, y, radius, color, speedX, speedY){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(0, 0 , this.radius, 0 , 2*Math.PI);
        ctx.fill();
        ctx.restore();
    }

    move(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function drawAllBalls(ballArray){
    ballArray.forEach(function(b){
        b.draw(ctx);
    });
}

function createBalls(n){
    let ballArray = [];
    for(let i = 0; i < n; i++){
        let x = Math.floor(w/2 * Math.random());
        let y = Math.floor(Math.random()*h/2);
        let radius = 5 + 30 * Math.random(); // between 5 and 35
        let speedX = -5 + 10 * Math.random(); // between -5 and + 5
        let speedY = -5 + 10 * Math.random(); // between -5 and + 5 
        let color = getRandomColor();

        let b = new Ball(x, y, radius, color, speedX, speedY);

        ballArray.push(b);
    }
    return ballArray;
}

window.onload = init;

function init(){
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    w = canvas.width;
    h = canvas.height;
    canvas.addEventListener('mousemove', mouseMoved);
    balls = createBalls(10)
    mainloop();
}

function mouseMoved(evt){
    mousePos = getMousePos(canvas, evt); 
}

function getMousePos(canvas, evt){
    let rect = canvas.getBoundingClientRect();
    return {
         x: evt.clientX - rect.left,
         y: evt.clientY - rect.top
        };
}

let i = 0;
function getRandomColor(){

    let colors = ['red', 'green', 'blue', 'purple', 'yellow'];
    let currentColor = colors[i % colors.length];
    i++;
    return currentColor;
}

function mainloop(){
    ctx.clearRect(0, 0, w, h);

    player.draw(ctx);
    drawAllBalls(balls);
    if(mousePos !== undefined){
        player.move(mousePos.x, mousePos.y);
    }
    balls.forEach(function(b){
        b.move();
    })
    
    requestAnimationFrame(mainloop);
}

