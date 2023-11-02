function setup() {
  var canvas = createCanvas(300, 400);
  canvas.parent("CanvasDiv");
}

function draw() {
  background(255, 99, 71);

  fill(255, 255, 255);
  stroke(19);

  textSize(40);
  text("happy", 70, 80);
  text("birthday", 100, 174);

  textSize(75);
  text("🧁", 103, 305);

  describe(
    "Happy birthday in white letters on tomato red background with a cupcake."
  );
}
