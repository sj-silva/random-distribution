const WINDOW_WIDTH = 400;
const WINDOW_HEIGHT = 400;
const WINDOW_COLOR = "#191919"; // Dark gray color
const totalBins = 10;
let countsPerBin = [];

function setup() {
  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
  background(WINDOW_COLOR);
  textSize(18);
  textAlign(CENTER, BOTTOM);
  countsPerBin = new Array(totalBins).fill(0);
  frameRate(30);
}

function draw() {
  let binIndex = floor(random(totalBins));
  countsPerBin[binIndex]++;
  stroke(255);
  fill(127);
  const w = width / totalBins;
  countsPerBin.forEach((val, i) => {
    rect(i * w, height - val, w - 1, val);
    text(i + 1, i * w + w / 2, height - val - 5);
  });

  if (countsPerBin.some((count) => count >= WINDOW_HEIGHT - 20)) {
    noLoop();
    return;
  }
}
