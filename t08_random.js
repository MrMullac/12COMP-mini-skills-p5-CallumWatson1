/********************************************************/
// t07_objects.js
/********************************************************/
var xVel = 10;
var yVel = 10;
var xPos = 530;
var yPos = 200;
var diam = 50;

var ball = {
  dia: 50,
  xPos: 0,
  yPos: 0,
  xVel: 3,

  updatePos: function(){
    this.xPos = this.xPos + this.xVel;
  },
  
  checkpos: function(){

  },

  disp: function(){

  },

}

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

  //fill('blue')
  //ellipse(pog.x, pog.y, pog.diam, pog.diam )
  fill('red')
  ellipse(pogg.x, pogg.y, pogg.diam, pogg.diam )


  
  //pog.x = pog.x + xVel;
  //pog.y = pog.y + yVel;
  
  //if(pog.x >= width - pog.diam/2){
  // pog.x = width - pog.diam/2;
  //  xVel = xVel * -1;
  //} 
  //else if(pog.x <= 0 + pog.diam/2){
  // pog.x = pog.diam/2;
  //  xVel = xVel * -1;
  //}

  //if(pog.y >= height - pog.diam/2){
  //  yVel = yVel * -1;
  //}else if (pog.y < pog.diam){
  //  yVel = yVel * -1;
  //}

  pogg.x = pogg.x + xVel;
  pogg.y = pogg.y + yVel;
  
  if(pogg.x >= width - pogg.diam/2){
   pogg.x = width - pogg.diam/2;
   xVel = xVel * -1;
  } 
  else if(pogg.x <= 0 + pogg.diam/2){
   pogg.x = pogg.diam/2;
    xVel = xVel * -1;
  }

  if(pogg.y >= height - pogg.diam/2){
   yVel = yVel * -1;
  }else if (pogg.y < pogg.diam){
    yVel = yVel * -1;
  }
}