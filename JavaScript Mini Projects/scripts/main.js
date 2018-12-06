let canvas, ctx, canvas2, ctx2;
let rectangleX = 0;
let rectangleY = 0;
let monsterX = 10;
let monsterY = 10;
let speed = 1;
let color = ['red','blue','green','purple'];
currentColor = 'black';
let ballX = 100;
let ballY = 100;
let ballSpeedY = 3;

window.onload = main;
function init(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(10,10,30,30);

    ctx.strokeStyle = 'green';
    ctx.lineWidth = 4;
    ctx.strokeRect(100,40,40,40);

    ctx.beginPath();
    ctx.arc(60,60,10,0,2*Math.PI);
    ctx.fill();

    ctx.fillStyle = 'purple';
    ctx.font = '20px Arial';
    ctx.fillText('Hello', 60,20);
}

function main(){
    canvas = document.querySelector('#myCanvas');
    ctx = canvas.getContext('2d');
    canvas2 = document.querySelector('#myCanvas2');
    ctx2 = canvas2.getContext('2d');
    animated();
    animate();
    setInterval(changeColor, 100);
}

function animate(){
    // Step 1: Clear the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Step 2: Draw the rectangle
    ctx.fillStyle = currentColor;
    ctx.fillRect(rectangleX, rectangleY, 80, 100);

    (function circle(){
        ctx.save();
        ctx.translate(ballX,ballY);
        ctx.beginPath();
        ctx.arc(0, 0, 15, 0, 2*Math.PI); 
        ctx.fill();
        ctx.restore();
    })();
      

    // Step 3: Move the rectangle
    //rectangleX = rectangleX + speed;
    //rectangleY = rectangleY + speed;
    ballX = ballX + speed;
    ballY = ballY + ballSpeedY;

    //if((rectangleX+80 > canvas.width) || (rectangleY+100 > canvas.height) || (rectangleX <= 0)){
      //  speed = -speed;
    //}
    if((ballX + 15) > canvas.width) {
        // the ball hit the right wall
        // change horizontal direction
        speed = -speed;
        
        // put the ball at the collision point
        ballX = canvas.width - 15;
      } else if((ballX - 15) < 0) {
        // the ball hit the left wall
        // change horizontal direction
        speed = -speed;
        
        // put the ball at the collision point
        ballX = 15;
      } 

      if((ballY + 15) > canvas.height) {
        // the ball hit the right wall
        // change horizontal direction
        ballSpeedY = -ballSpeedY;
        
        // put the ball at the collision point
        ballY = canvas.height - 15;
      } else if((ballY - 15) < 0) {
        // the ball hit the left wall
        // change horizontal direction
        ballSpeedY = -ballSpeedY;
        
        // put the ball at the collision point
        ballY = 15;
      }  
    requestAnimationFrame(animate);
}

function animated(){
    // Step 1: Clear the canvas
    ctx2.clearRect(0,0,canvas2.width,canvas2.height);

    // Step 2: Draw the rectangle 
    drawMonster(monsterX, monsterY);

    // Step 3: Move the rectangle
    monsterX = monsterX + speed;
    monsterY = monsterY + speed;

    if((monsterX+100 > canvas2.width) || (monsterY+100 > canvas2.height) || (monsterX <= 0)){
        speed = -speed;
    }    
    requestAnimationFrame(animated);
}

function changeColor(){
    currentColor = color[Math.floor(Math.random()*color.length)];
}

function drawMonster(x,y){
    // Step 1: save the context
    ctx2.save();
    // Step 2: translate the context
    ctx2.translate(x,y);
    // Step 3: Draw the shape
    ctx2.strokeRect(0,0,100,100);
    // Step 4: Draw other shapes relative to the rectangle
    ctx2.fillRect(20,20,10,10);
    ctx2.fillRect(65,20,10,10);

    ctx2.strokeRect(45,40,10,40);

    ctx2.strokeRect(35,84,30,10);

    ctx2.fillRect(38, 84, 10, 10);
    ctx2.fillRect(52, 84, 10, 10);

    ctx2.restore();
}