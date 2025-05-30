let posX 
let velX

let posY
let velY

function setup() {
	createCanvas(500, 500)

	posX = 250
	velX = 2

	posY = 250
	velY = 1


}

function draw() {

	posX = posX + velX

	posY = posY + velY

	if(posX >= width) {
		velX = -velX-1
	} else if (posX < 0) {
		velX = -velX
	}


	if(posY >= height) {
		velY = -velY-1
	} else if (posY < 0) {
		velY = -velY
	}


	
	background(100)

	ellipse(posX, posY, 25)
	fill(200, posX, posY)


}