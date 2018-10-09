// declare variables here


function setup() {
  createCanvas(500, 500);
  ellipsewidth=50

}

function draw() {
  //
  // set background color in grayscale:
  background(255, 90, 160);

  // draw rectangle
  fill(100, 200,  random(0, 255));
  stroke(0, 0, 255);
  strokeWeight(5);
  rect(350, 100, 75, 160);

    // draw ellipse
    ellipsewidth++
    fill(0, 150, 200);
    stroke(255);
    strokeWeight(2);
    ellipse(390, 175, ellipsewidth);

    fill(0, 150, 200);
    stroke(255)
    strokeWeight(2)
    ellipse(mouseX, mouseY, mouseX);
}


// write custom functions here
