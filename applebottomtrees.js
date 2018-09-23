let sunX = 0,
    cloudX = sunX;

function setup() {
  createCanvas(700, 400);
  noStroke();
}

function draw () {
  drawScene();
  drawSun();
  drawCloud();
  drawTree();
  drawApples();
  drawBird();
}

function drawScene () {
  background("skyblue");
  fill("green");
  grassHeight = height - 100;
  rect(0, grassHeight, width, 100);
}

function drawSun () {
  fill("yellow");
  ellipse(sunX, height / 4, 100, 100);
  sunX = (sunX + 0.3) % width;
}

function drawCloud() {
  fill("white");
  ellipse(cloudX, 230, 100, 70);
  ellipse(cloudX, 190, 40);
  ellipse(cloudX + 30, 195, 40);
  ellipse(cloudX - 30, 195, 40);
  ellipse(cloudX + 40, 215, 40);
  ellipse(cloudX - 40, 215, 40);
  ellipse(cloudX, 250, 40);
  ellipse(cloudX + 35, 240, 40);
  ellipse(cloudX - 35, 240, 40);
  ellipse(cloudX + 20, 250, 40);
  ellipse(cloudX - 20, 250, 40);
  cloudX = (cloudX + 1) % width;
}

function drawTree() {
  fill("brown");
  rect(470, 250, 50, 100);
  rect(490, 270, 70, 10);
  fill("green");
  ellipse(495, 230, 80, 75);
}

function drawApples() {
  fill("red");
  ellipse(500, 230, 10);
  ellipse(480, 245, 10);
  ellipse(470, 220, 10);
  ellipse(515, 210, 10);
  ellipse(515, 250, 10);
}

function drawBird() {
  fill("#E9967A");
  // body
  ellipse(555, 265, 20, 25);
  // head
  ellipse(560, 250, 20);
  fill("#696969");
  // eyes
  ellipse(560, 245, 5);
  // beak
  triangle(565, 255, 565, 245, 580, 250);
  // wings
  ellipse(555, 265, 10, 20);
}
