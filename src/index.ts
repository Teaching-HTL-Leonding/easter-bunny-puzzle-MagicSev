import p5 from "p5";

let bunnyImage: p5.Image;
const p = new p5((sketch) => {
    sketch.setup = setup;
    sketch.preload = preload;
    sketch.draw = draw;
});
const rows = 2
const colums = 2

function setup() {
    p.createCanvas(500, 500);
}
function preload(){
    bunnyImage = p.loadImage("assets/bunny.png")
}
function draw(){
    const imagewidth = p.width/colums
    const imageheight = p.height/rows
    p.background("white")
    p.stroke("white")
    p.noFill();
    p.strokeWeight(2)
    for(let y =0 ; y<colums;y++){
        for(let x = 0; x<rows;x++){
            p.image(bunnyImage,x*imagewidth,y*imageheight,imagewidth,imageheight,x*imagewidth,y*imageheight,imagewidth,imageheight)
            p.rect(x*imagewidth,y*imageheight,imagewidth,imageheight)
        }
    }
}