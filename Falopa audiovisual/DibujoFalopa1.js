// Copiar el codigo y pegarlo en "https://editor.p5js.org/"

let posX
let miColor
let posY
let miColor2
let wetlaY
let Portal
let Creeper
let Roblox
function setup() {
createCanvas(600, 400);
posX= 0
posY=0
miColor= 150
miColor2= 140
wetlaY=0
Portal=0
Creeper=0

}

function draw() {
background(miColor,miColor2,57)
noStroke(100)
fill(posX,255,0)
ellipse(posX,posY,50,50)
posX= posX +5

noStroke(100)
fill(255)
rect (wetlaY, 100, 50, 50)
wetlaY = wetlaY +5

noStroke(1)
fill(0,255,0)
rect(Creeper,276,50,50)
Creeper= Creeper +5

if(posX > 600){
posX=0
miColor=random (255)
posY=random(400)
micolor2=random(255)
   }
if(wetlaY > 600){
fill(Portal)
square(190,70,170,200)
Portal= Portal +1

stroke(30)
fill(Portal);
square(215,80,100,200);
Portal= Portal +1

stroke(30)
fill(0,0,Portal)
stroke(100)
square(230,90,70,50);
Portal= Portal +1

stroke(30)
fill(100,Portal,Portal)
square(250,100,30,50)
Portal= Portal +1

  if(Creeper > 600){
  fill(0,255,0)
  rect(50,60,70,80)
  fill(1)
  rect(60,70,20,20)
  fill(1)
  rect(100,70,20,20)
  fill(1)
  rect(60,110,30,20)
  fill(255)
  rect(60,70,10,10)
  fill(255)
  rect(100,70,10,10)}

  if( Roblox > 600)
  noStroke(1)
  fill(255,255,0)
  rect(400,70,70,60)

  noStroke(1)
  fill (255,255,0)
  square(400,50,70,40)

  noStroke(1)
  fill(1)
  square(410,80,10,20)

  noStroke(1)
  fill(1)
  square(440,80,10,20)

  noStroke(1)
  fill(1)
  rect(420,110,40,10)



}
}
