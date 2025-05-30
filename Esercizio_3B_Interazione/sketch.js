function setup() {
	createCanvas(800, 600)
}

function draw() {
	//background(50, 200, 50)

	if(mouseIsPressed) {
	  fill(mouseX, mouseY, 200)
	  ellipse(mouseX, mouseY, 200)
	  ellopse(width - mouseX, mouseY, 60)
	  
	}
}

