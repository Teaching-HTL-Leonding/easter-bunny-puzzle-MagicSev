import p5 from 'p5';

let bunnyImage: p5.Image;
const p = new p5((sketch) => {
  sketch.setup = setup;
  sketch.preload = preload;
  sketch.draw = draw;
});
const rows = 5;
const colums = 5;
let imagewidth = 0;
let imageheight = 0;
let position: number[][] = [];
function setup() {
  p.createCanvas(500, 500);
  imagewidth = p.width / colums;
  imageheight = p.height / rows;
  for (let i = 0; i < rows * colums; i++) {
    let newX = findRandomPos(0, rows, imagewidth);
    let newY = findRandomPos(0, colums, imageheight);
    while (checkIfAlreadyUsed(newX, newY)) {
      newX = findRandomPos(0, rows, imagewidth);
      newY = findRandomPos(0, colums, imageheight);
    }
    position.push([newX, newY]);
  }
}
function preload() {
  bunnyImage = p.loadImage('assets/bunny.png');
}
function draw() {
  p.background('white');
  p.stroke('white');
  p.noFill();
  p.strokeWeight(2);
  let index = 0;
  for (let y = 0; y < colums; y++) {
    for (let x = 0; x < rows; x++) {
      const sx = position[index][0];
      const sy = position[index][1];
      p.image(bunnyImage, x * imagewidth, y * imageheight, imagewidth, imageheight, sx, sy, imagewidth, imageheight);
      p.rect(x * imagewidth, y * imageheight, imagewidth, imageheight);
      index++;
    }
  }
}
function checkIfAlreadyUsed(x: number, y: number): boolean {
  for (let i = 0; i < position.length; i++) {
    if (position[i][0] === x && position[i][1] === y) {
      return true;
    }
  }
  return false;
}
function findRandomPos(min: number, max: number, margin: number): number {
  return Math.floor(p.random(min, max)) * margin;
}
