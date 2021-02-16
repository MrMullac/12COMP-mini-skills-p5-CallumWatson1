/********************************************************/
// t07_objects.js
/********************************************************/
var x = 0;
var y = 200;
var diam = 50;
var xVel = 3;

var pog = {
  x: 0,
  y: 200,
  diam: 50
};

var pogg = {
  x: 0,
  y: 100,
  diam: 50
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('lightgreen');

  fill('blue')
  ellipse(pog.x, pog.y, pog.diam, pog.diam )
  fill('red')
  ellipse(pogg.x, pogg.y, pogg.diam, pogg.diam )


  
  if(pog.x >= width - pog.diam/2){
   pog.x = width - diam/2;
    xVel = xVel * -1;
  } 
  else if(pog.x <= 0 + pog.diam/2){
   pog.x = pog.diam/2;
    xVel = xVel * -1;
  }

  if(pog.y >= height - pog.diam/2){
   yPos = height - diam/2;
    xVel = xVel * -1;
  } 
  else if(pog.y <= 0 + pog.diam/2){
   pog.y = pog.diam/2;
    xVel = xVel * -1;
  }

if(pogg.x >= width - pogg.diam/2){
   pogg.x = width - pogg.diam/2;
    xVel = xVel * -1;
  } 
  else if(pogg.x <= 0 + pogg.diam/2){
   pog.x = pog.diam/2;
    xVel = xVel * -1;
  }

  if(pogg.y >= height - pogg.diam/2){
   yPos = height - diam/2;
    xVel = xVel * -1;
  } 
  else if(pogg.y <= 0 + pogg.diam/2){
   pog.y = pog.diam/2;
    xVel = xVel * -1;
  }
  pog.x = pog.x + xVel;
  pog.y = pog.y + xVel + 1;
}