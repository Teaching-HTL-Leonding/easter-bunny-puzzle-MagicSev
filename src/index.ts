import p5 from "p5";
const TILES = 5;
const TILESIZE = 500/TILES
let bunnyimage:p5.Image;
let randomtileY: number[][] =[]
let randomtileX: number[][] =[]

const p = new p5((sketch) => {
    sketch.setup = setup;
    sketch.draw = draw;
    sketch.preload = preload
});

function setup() {
    p.createCanvas(500, 500);
    p.background("red");
    
    for(let x = 0;x < TILES; x++){
        randomtileX[x] = []
        randomtileY[x] = []
        for(let y = 0; y <TILES; y++){
           randomtileX[x][y] = Math.floor(p.random(TILES))*TILESIZE
           randomtileY[x][y] = Math.floor(p.random(TILES))*TILESIZE

           
    }
}


}
function draw(){
    p.noFill()
    p.stroke("white")
    p.strokeWeight(2)

for(let x = 0;x < TILES; x++){
    for(let y = 0; y <TILES; y++){
        if(x!==TILES-1||y!==TILES-1){
            const imageX = x*500/TILES
            const imageY = y*500/TILES
            p.image(bunnyimage,imageX,imageY,TILESIZE,TILESIZE,randomtileX[x][y],randomtileY[x][y],TILESIZE,TILESIZE)
            p.rect(imageX,imageY,TILESIZE,TILESIZE)

        }
    }
}
}
function preload(){
    bunnyimage = p.loadImage('assets/bunny.png')
}