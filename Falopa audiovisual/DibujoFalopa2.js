// Copiar el codigo y pegarlo en "https://editor.p5js.org/"

let posX
let miColor
let posY
let miColor2
let wetlaY
let Portal
function setup() {
createCanvas(600, 400);
posX=0
posY=0
miColor= random(255)
miColor2= random(255)
wetlaY=0
Portal=0

}

function draw() {
//background(255)
noStroke(100)
fill(miColor,miColor2,30)
ellipse(posX,10,60,30)
posX= posX +5


ellipse(40,posY,50,50)
posY= posY +5

noStroke(100)
fill(miColor,miColor2,40)
rect (wetlaY, 100, 50, 50)
wetlaY = wetlaY +5

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



}
}