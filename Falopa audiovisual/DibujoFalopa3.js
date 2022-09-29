// Copiar el codigo y pegarlo en "https://editor.p5js.org/"

let miVariable
function setup() {
  createCanvas(400, 400);
  miVariable = 0

}

function draw() {
 background (1,1,miVariable)
   miVariable = miVariable +1

  stroke(30)
  fill(miVariable)
square(190,70,170,200)
  miVariable = miVariable +1

  stroke(30)
  fill(miVariable);
  square(215,80,100,200);
  miVariable = miVariable +1

stroke(30)
 fill(0,0,miVariable)
  stroke(100)
  square(230,90,70,50);
  miVariable = miVariable +1

  stroke(30)
  fill(100,miVariable,miVariable)
  square(250,100,30,50)
  miVariable = miVariable +1




}


