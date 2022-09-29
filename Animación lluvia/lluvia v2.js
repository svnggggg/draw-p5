// Copiar el codigo y pegarlo en "https://editor.p5js.org/"

let y
let x
let invisible
function setup() {
createCanvas(400, 400);
background(220);
}

function draw() {
y = random (600)
x = random (600)
invisible = random (255)

fill (50,50,200,invisible)
noStroke ()
ellipse (x,y,10,10)


if (invisible > 300)
background(220);

}