/********************************************************/
// t07_objects.js
/********************************************************/
var x = 0;
var y = 200;
var diam = 50;

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

  pog.x = pog.x + 1;
  pogg.x = pogg.x + 1;
}