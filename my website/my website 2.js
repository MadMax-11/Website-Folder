function setup() {
  createCanvas(1000, 1500);
}
function draw() {
  background(255, 181, 202);

  fill("white");
  stroke("white");
  arc(565, 250, -250, -250, 0, HALF_PI);

  fill("white");
  stroke("white");
  arc(450, 250, 250, 250, HALF_PI, PI);

  fill("white");
  stroke("white");
  square(450, 255, 120);

  fill(255, 181, 202);
  stroke("white");
  ellipse(506, 250, 400, 40);

  fill("white");
  stroke("white");
  ellipse(505, 375, 250, 30);
}
