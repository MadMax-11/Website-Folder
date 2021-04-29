let x = 0;
let y = 0;

function setup() {
  createCanvas(1500, 900);
}
function draw() {
  background(255, 181, 202);

  for (let counter = 0; counter < 100; counter++) {
    fill(135, 201, 163);
    stroke("pink");
    ellipse(750, 300, 400, 400);
  }
  for (let counter = 0; counter < 100; counter++) {
    fill(255, 181, 202);
    stroke(255, 181, 202);
    circle(750, 650, 150);
  }
  fill("white");
  stroke("white");
  triangle(200, 1500, 1500, 300, 100000, 100000);

  textSize(40);
  fill(1, 79, 22);
  text("Bay Side Beans", 615, 320);
}
