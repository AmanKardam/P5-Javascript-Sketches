let b = [];
let b1;
let bu;
let s;
let b3;
function setup() {
  createCanvas(600, 400);
  s=createSlider(20,80,40);
  resetSketch();
  bu = createButton('reset');
  bu.mousePressed(resetSketch);
  
}

function resetSketch() {
  loop();
  
  b1 = new Ball(30, 200, 10,'black');
  b3 = new Ball(20, 200, 10);
  b2 = new Pong(590, 200, 10,s.value(),'red');
};

function draw() {
  frameRate(120);
  background('white');
  
  noCursor();
  b1.show();
  b3.show();
  b3.move();
  b1.click();
  b2.show();
  b2.move();
  b2.reflect(b1);
  b2.reflect(b3);
  if (b1.reset()){
  resetSketch();
  
  }
}