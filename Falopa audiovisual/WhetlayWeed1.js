// Copiar el codigo y pegarlo en "https://editor.p5js.org/"

let miVariable
function setup() {
  createCanvas(400, 400);
  miVariable = 0

}

function draw() {
  background (160);
  fill(0)
  stroke(0)
  square(190,70,170,200)
  miVariable = miVariable +1

  fill(miVariable,0,0);
  square(215,80,100,200);
  miVariable = miVariable +1

  fill(miVariable,miVariable,0)
  stroke(100)
  square(230,90,70,50);
  miVariable = miVariable +1

  fill(miVariable,0,0)
  square(250,100,30,50)
  miVariable = miVariable +1
}
