let x = 0;
let y = 0;

function setup() {
  createCanvas(1000, 1500);
  fill("pink");
  background(255);
}
function draw() {
  background(255, 10);
  for (let counter = 0; counter < 100; counter++) {
    fill("yellow");
    stroke("pink");
    ellipse(750, 500, 400, 400);
  }
  fill("pink");
  stroke("pink");
  square(675, 525, 150);
  {
    fill("black");
    Stroke("black");
    arc(650, 500, 80, 80, 0, HALF_PI);
  }
}
