// Copiar el codigo y pegarlo en "https://editor.p5js.org/"

let MiColor
function setup() {
createCanvas(400,600);
background(220);
MiColor=random(0,255)
}

function draw() {
noStroke(1)
fill(45,MiColor,67)
ellipse(mouseY,mouseX,20,20)
MiColor= MiColor +4

if(mouseIsPressed){
noStroke(1)
fill (67,MiColor,MiColor)
ellipse(mouseX,mouseY,20,20)
MiColor= MiColor +4

if(keyIsPressed && key === 'Shift'){
background(random(255),0,MiColor)
MiColor= MiColor +6



}
}
}

