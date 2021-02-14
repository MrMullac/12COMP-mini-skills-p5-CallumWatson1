/********************************************************/
// t06_bounce_ball.js
/********************************************************/
var xVel = 10;
var xPos = 530;
var yPos = 200;
var diam = 60;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  stroke(255)
  strokeWeight(4)
  noFill()
  ellipse(xPos, yPos, diam)
  
  xPos = xPos + xVel;
  yPos = yPos + xVel + 1;
  
  if(xPos >= width - diam/2){
   xPos = width - diam/2;
    xVel = xVel * -1;
  } 
  else if(xPos <= 0 + diam/2){
   xPos = diam/2;
    xVel = xVel * -1;
  }

  if(yPos >= height - diam/2){
   yPos = height - diam/2;
    xVel = xVel * -1;
  } 
  else if(yPos <= 0 + diam/2){
   yPos = diam/2;
    xVel = xVel * -1;
  }
}