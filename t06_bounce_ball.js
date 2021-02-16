/********************************************************/
// t06_bounce_ball.js
/********************************************************/
var xVel = 10;
var yVel = 10;
var xPos = 530;
var yPos = 200;
var diam = 50;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(1);
}

function draw() {
  background(220);

  stroke(100)
  strokeWeight(1)
  fill('red')
  ellipse(xPos, yPos, diam)
  
  xPos = xPos + xVel;
  yPos = yPos + yVel;
  
  if(xPos >= width - diam/2){
   xPos = width - diam/2;
    xVel = xVel * -1;
  } 
  else if(xPos <= 0 + diam/2){
   xPos = diam/2;
    xVel = xVel * -1;
  }

  if(yPos >= height - diam/2){
    yVel = yVel * -1;
  }else if (yPos < diam){
    yVel = yVel * -1;
  }
}