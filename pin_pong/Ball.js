class Ball {
  constructor(x, y, r,col='gray') {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speedX = random(5, 7);
    this.speedY = random(6, 7);
    this.col = col;
    this.f=false;

  }
  show() {
    noStroke();
    fill(this.col);
    circle(this.x, this.y, this.r);
  }
  move() {
    colorMode(HSB);
    if ((this.x + this.r / 2) >= width || this.x - this.r / 2 <= 0) {
      this.speedX *= -1;
      //this.col=color(random(0,360),123,100);

    }
    if (this.y + this.r / 2 >= height || this.y - this.r / 2 <= 0){
      this.speedY *= -1;
      //this.col=color(random(10,255),150,140);

    }

    this.x += this.speedX;
    this.y += this.speedY;

  }
  stop() {

    if (mouseIsPressed) {

      noLoop();

    }

  }
  click() {
    if(mouseIsPressed){this.f=true}
    if(this.f){this.move()}
    
    

  }
  reset(){
  if(this.x+this.r/2>width){
  background('white');
  noStroke();
  fill('red');
  textSize(40);
  text('GameOver',width/2-90,200);
  noLoop();
  
  }
  
  
  }



}

class Pong {

  constructor(x, y, w, h,col='black') {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.col=col;

  }
  show() {
    noStroke();
    fill(this.col);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h, 10);

  }
  move() {
    this.y = mouseY;
    if (this.y + this.h/2 > height) {
      this.y = height-this.h/2
    }
    if (this.y - this.h/2 < 0) {
      this.y = this.h/2
    }
  };
  reflect(b1){
  if (b1.x + b1.r >= (this.x - this.w / 2) && b1.x + b1.r <= (this.x + this.w / 2) && b1.y >= (this.y - this.h / 2-1) && b1.y <= (this.y + this.h / 2+1)) {

    b1.speedX *= -1;
    //b1.speedY *= -1;

  }
  
  }






}