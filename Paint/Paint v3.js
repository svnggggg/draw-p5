// Copiar el codigo y pegarlo en "https://editor.p5js.org/"

let MiColor
function setup() {
createCanvas(400,600);
background(220);
MiColor= random(255)
}

function draw() {
noStroke(1)
fill(MiColor,255,56)
ellipse(mouseX,mouseY,20,20)
MiColor= MiColor +6

if(mouseIsPressed){
noStroke(1)
fill(MiColor,56,MiColor)
ellipse(mouseX,mouseY,20,20)
MiColor= MiColor +6

if(keyIsPressed && key == 'e'){
background(random(255),0,MiColor)
MiColor= MiColor +6
}
}
}