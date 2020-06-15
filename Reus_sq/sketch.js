let s;
let b;
let f;
function setup() {
  createCanvas(windowWidth, windowHeight);
  s=createSlider(0,0.02,0.002,0.001);
  f=false;
}

function re_sq(x1, y1, x2, y2,) {
  rectMode(RADIUS);
  
  if (mouseIsPressed){
  
  f=true;
  
  }
  else{f=false;}
  if(f){
fill(random(0,255),random(0,255),random(0,255));
  }
  else{noFill();}
  rect(x1, y1, x2,y2);
  
  if (x2 > 1&&y2>1) {
    strokeWeight(2);
    stroke('black');
    rotate(frameCount*s.value());
    re_sq(x1, y1, x2/1.2 , y2 /1.2);
  
  }



}

function draw() {
  translate(width/2,height/2);
  
  background('white');
  re_sq(0,0,width/2-50,width/2-50,s);
}
