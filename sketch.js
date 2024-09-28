let a=80;
function setup() {
  createCanvas(windowWidth, windowHeight);
background(71, 9, 9);
angleMode(DEGREES);
for (let b = 0; b < windowWidth; b+=550) {
  for (let c= 0; c < windowHeight; c+=550) {
    push();
    drawFlower2(b,c);
    pop();
  }
}

}


function drawFlower2(x,y){
  push();
  translate(x, y);
  drawFlower1(a,100,100);
  pop();
 

  push();
  translate(x, y);
  rotate(90);
  drawFlower1(a,100,100);
  pop();

  push();
  translate(x, y);
  rotate(180);

  drawFlower1(a,100,100);
  pop();

  push();
  translate(x, y);
  rotate(270);
  drawFlower1(a,100,100);
  pop();

  push();
  translate(x, y);
  fill(71, 9, 9);
  ellipse(0, 0, 100);
  pop();
 
}
function drawFlower1(x,y,n,) {

  fill(240);
noStroke();
beginShape();
curveVertex(0, 0);
curveVertex(-x,y);
curveVertex(-x,n+y);
curveVertex(x,n+y);
curveVertex(x,y);
curveVertex(0,0);
endShape(CLOSE);

stroke(71, 9, 9);
strokeWeight(15);
line(0,0,-x/3,y+n/3);
line(0,0,x/3,y+n/3);
}