/********************************************************/
// t03_shapes_and_drawing.js
/********************************************************/
function setup() {
  createCanvas( windowWidth, windowHeight );
}

function draw() {
  background('grey');

  stroke(0);
  fill('blue');
  rect(windowWidth / 2, windowHeight / 2, 50, 50);
  
  line(20, 20, 50, 50);

  fill('green');
  ellipse( 90, 30, 50, 50);

  fill(255,0,0,63);
  rect( 100, 10, 50, 50);

  fill('orange');
  stroke(255);
  rect( 180, 10, 50, 50);
}