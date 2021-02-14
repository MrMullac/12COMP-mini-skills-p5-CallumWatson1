/********************************************************/
// t05_move_ball.js
/********************************************************/
var circleX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  fill('blue');
  ellipse(circleX, windowHeight / 2, 50, 50);

  circleX = circleX + 1;
  
}