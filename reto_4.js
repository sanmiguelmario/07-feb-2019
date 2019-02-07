function setup() {
  createCanvas(400, 400);
}

function draw() {
background(255);
if(mouseIsPressed){
  background(0,255,0);
  rect(150,150,80,80);
	textSize(100);
	text("hola", 75,200);
	
}
  else{
    background(150);
    rect(150,150,80,80);
		mouseIsPressed
  }
	
}
