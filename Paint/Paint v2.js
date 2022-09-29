// Copiar el codigo y pegarlo en "https://editor.p5js.org/"

function setup() {
    createCanvas(400,600);
    background(220);
    }

    function draw() {
    noStroke(1)
    fill(255,255,0)
    ellipse(mouseX,mouseY,20,20)

    if(mouseIsPressed){
    noStroke(1)
    fill (0,255,0)
    ellipse(mouseX,mouseY,20,20)

    if(keyIsPressed && key == 'q'){
    noStroke(1)
    fill (255,0,255)
    rect(mouseX,mouseY,20,20)

    }
    }
    }