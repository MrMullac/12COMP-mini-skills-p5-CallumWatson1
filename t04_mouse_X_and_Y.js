/********************************************************/
// t04_mouse_X_and_Y.js
/********************************************************/
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
}

function draw() {


  noStroke();
  fill(150, 150, 150, 25);
  ellipse(mouseX, mouseY, 15, 15);


}