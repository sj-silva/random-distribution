let randomCounts = [];
const total = 20;

function setup() {
  createCanvas(400, 400);
  background(25);
  for (let i = 0; i < total; i++) randomCounts[i] = 0;
}

function draw() {
  let index = floor(random(randomCounts.length));
  randomCounts[index]++;
  stroke(255);
  fill(127);
  const w = width / randomCounts.length;
  for (let i = 0; i < randomCounts.length; i++) {
    rect(i * w, height - randomCounts[i], w - 1, randomCounts[i]);
  }
}
