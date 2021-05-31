function setup(){
createCanvas(600, 500);
//background
//background(255, 204, 0);
//gradient
c1 = color(255, 204, 0);
  c2 = color(255);
  setGradient(c1, c2);

}

function draw(){
    stroke(42, 157, 143,90);
    line(300, 200, mouseX, mouseY);

}

function setGradient(c1, c2) {
    // noprotect
    noFill();
    for (var y = 0; y < height; y++) {
      var inter = map(y, 0, height, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(0, y, width, y);
    }
}