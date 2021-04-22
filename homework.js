let x = 0;
let y = 0;
const sprayrange = 800;
function setup() {
  createCanvas(800, 600);
  background(255); // one number 0-255 is dark to light
}
function draw() {
  background(255, 10); // luminosity and alpha
  for (let counter = 0; counter < 100; counter++) {
    fill("blue"); // red and green and 0 for blue
    stroke("blue"); // just blue
    x =
      random(-sprayrange, sprayrange) +
      random(-sprayrange, sprayrange) +
      random(-sprayrange, sprayrange) +
      random(-sprayrange, sprayrange) +
      random(-sprayrange, sprayrange);
    y =
      random(-sprayrange, sprayrange) +
      random(-sprayrange, sprayrange) +
      random(-sprayrange, sprayrange) +
      random(-sprayrange, sprayrange) +
      random(-sprayrange, sprayrange);

    ellipse(x, y, 5, 5); // square
  }
}
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
