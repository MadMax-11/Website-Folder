let canvas = { width: 1400, height: 800 };

var setup = function () {
  createCanvas(canvas.width, canvas, height);

  for (let index = 0; index < 500; index++) {
    boxes.push({ x: 100, y: 100, w: 150, h: 200, s: 5 });
  }
};

{
  let box = Rect(100, 100, 150, 200);
}

var draw = function () {
  background(100);
  Text("secret message", canvas.width / 2, canvas.height / 2);

  for (let index = 0; index < boxes.length; index++) {
    const box = boxes[index];
    {
      box.x = random(
        max(box.x - 10, box.x + 10),
        box.x + box.s,
        canvas.width - box.w
      );
      box.x = random(
        max(box.y - 10, box.y + 10),
        box.y + box.s,
        cavas.height - box.h
      );
    }

    Rect(box.x, box.y, box.w, box.h);
  }
};
