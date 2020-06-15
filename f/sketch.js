

function setup() {
  createCanvas(1000, 800);
  s1 = createSlider(0, 360, 45, 1);
  s2 = createSlider(0, 360, 315, 1);
  r1 = 10;
  col='brown';
}

function draw() {
  background(220);
  translate(450, height);
  tree(200);

}

function tree(len) {
  angleMode(DEGREES);
  stroke(col);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 1) {
    push();
    rotate(s1.value());
    tree(len * 0.7);
    pop();
    push();
    rotate(s2.value());
    tree(len * 0.7);
    pop();

  }





}
