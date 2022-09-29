// Copiar el codigo y pegarlo en "https://editor.p5js.org/"

let miVariable2
let miVariable
function setup() {
  createCanvas(400,400);
  miVariable = 0
  miVariable2= 0
}

function draw() {
 background (1,1,miVariable2)
  miVariable = miVariable +1
  miVariable2=miVariable2 +1

  stroke(30)
  fill(miVariable2)
  square(190,70,170,200)
   miVariable = miVariable +1
   miVariable2=miVariable2 +1

  stroke(30)
  fill(miVariable2);
  square(215,80,100,200);
  miVariable = miVariable +1
  miVariable2=miVariable2 +1

  stroke(30)
  fill(0,0,miVariable2)
  stroke(100)
  square(230,90,70,50);
  miVariable = miVariable +1
  miVariable2=miVariable2 +1

  stroke(1)
  fill(150,miVariable2,miVariable2)
  square(250,100,30,50)
  miVariable = miVariable +1
  miVariable2=miVariable2 +1



}