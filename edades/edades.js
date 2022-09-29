// Copiar el codigo y pegarlo en "https://editor.p5js.org/"

let edades = [120, 40, 90, 330, 0, 20, 50, 150, 50, 90]
function setup() {
createCanvas(600, 400);
}

function draw(){
background(220);
noStroke(0)

for(let i =0; i<10; i+=1){
fill(0,edades[i],70)
rect(edades[1]*i,0,35,edades[i])

}
}