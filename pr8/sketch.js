var box;
var circleX;

function setup() {
createCanvas(700, 700);
noStroke();
circleX = 0;

}

function draw() {
  background(0, 52, 150);
circleX = circleX + 1;


if (circleX >= width) {
    circleX = 0;
  }
  //taken from codetrain
  box = map(mouseX, 0, height, 200, 0);
  //background(box, 56, 80, 121);
  background(box,142, 200, 255);
  
  //cloud
  fill(box, 70, 122);
ellipse(100, 390, 140, 140);
ellipse(25, 330, 130, 130);
ellipse(200, 420, 130,130);
ellipse(300, 430, 120,120);
ellipse(350, 375, 120,120);
ellipse(420, 400, 100,100);
ellipse(700, 300, 160,160);
ellipse(600, 375, 140,140);
ellipse(510, 350, 80,80);
ellipse(0, 270, 60,60);
ellipse(530, 370, 80,80);
ellipse(520, 370, 80,80);
ellipse(465, 375, 80,80);
ellipse(700, 375, 100,100);
rect(0, 400, 700, 500);

  
  //sun
fill(255,200);
ellipse(250, 350, 120, 120);

fill(255, 35);
ellipse(250, 350, 140, 140);
ellipse(250, 350, 160, 160);
ellipse(250, 350, 180, 180);
ellipse(250, 350, 200, 200);
  
//cloud front
 fill(box, 98, 160);
ellipse(64, 411, 80,80);
ellipse(0, 430, 100,100);
ellipse(80, 470, 130,130);
ellipse(180, 430, 100,100);
ellipse(260, 460, 80,80);
ellipse(210, 480, 80,80);
ellipse(310, 420, 100,100);
ellipse(360, 440, 120,120);
ellipse(440, 480, 80,80);
ellipse(500, 460, 120,120);
ellipse(580, 400, 100,100);
ellipse(620, 440, 120,120);
ellipse(700, 400, 120,120);
ellipse(700, 440, 120,120);
ellipse(600, 440, 120,120);
ellipse(5, 440, 120,120);
rect(0, 460, 700, 700);

//Snow 
//from sarah looney
fill(255, 150);
ellipse(10, circleX, 10, 10);
ellipse(50, circleX+20, 10, 10);
ellipse(80, circleX, 5, 5);
ellipse(110, circleX+100, 5, 5);
ellipse(140, circleX+150, 10, 10);
ellipse(180, circleX-200, 10, 10);
ellipse(200, circleX-150, 5, 5);
ellipse(240, circleX-50, 5, 5);
ellipse(240, circleX, 10, 10);
ellipse(300, circleX+20, 5, 5);
ellipse(440, circleX, 10, 10);
ellipse(440, circleX, 10, 10);
ellipse(550, circleX+100, 10, 10);
ellipse(530, circleX-250, 10, 10);
ellipse(530, circleX-200, 5, 5);
ellipse(580, circleX-300, 5, 5);
ellipse(300, circleX-400, 5, 5);
ellipse(140, circleX-350, 5, 5);
ellipse(400, circleX-300, 5, 5);
ellipse(550, circleX, 5, 5);

//window
 fill(box, 49, 76,200);
rect(0, 0, 700, 25);

fill(box, 49, 76,150);
rect(0, 30, 700, 4);
rect(0, 40, 700, 4);
rect(0, 50, 700, 4);
rect(0, 60, 700, 4);
rect(0, 70, 700, 4);
rect(0, 80, 700, 4);
rect(0, 90, 700, 4);
rect(0, 100, 700, 4);
rect(0, 110, 700, 4);
rect(0, 120, 700, 4);
rect(0, 130, 700, 4);

 fill(box, 49, 76,200);
rect(0, 150, 700, 7);
rect(50,25,10,575);
rect(650,25,10,575);
rect(0,600,700,100);

}