// Copiar el codigo y pegarlo en "https://editor.p5js.org/"

function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    background(220);
    noStroke(0)

    //Cuerpo
    fill(255,0,0)
    rect(60,130,70,85)

    //Cabeza
    fill(255,0,0)
    ellipse(95,110,70,80)

    //Ojos
    fill(0,255,255)
    rect(80,90,45,30)

    //Patas
    fill(255,0,0)
    rect(60,200,30,30)
    fill(255,0,0)
    rect(100,200,30,30)

    //Mochila
    fill(255,0,0)
    rect(50,130,20,85)

    //Cuchillo
    fill(30,0,0)
    rect(120,180,20,20)

    fill(80)
    rect(125,120,10,60)

}