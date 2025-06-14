let flash = false;
let flashTimer = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	// attiva un flash con probabilità bassa
	if (!flash && random(1) < 0.003) { // 0.2% di probabilità per frame
		flash = true;
		flashTimer = int(random(1, 3)); // durata breve
	}

	// sfondo con effetto tuono tenue
	if (flash) {
		background(220); // flash grigio chiaro, non bianco
		flashTimer--;
		if (flashTimer <= 0) {
			flash = false;
		}
	} else {
		background(0, 50); // sfondo nero semitrasparente
	}

	// pioggia
	for (let i = 0; i < 50; i++) {
		let gl = random(10, 80);
		let gx = random(0, width);
		let gy = random(-gl, height);

		strokeWeight(random(1, 3));
		stroke(200, 255, 255, random(100, 200));
		line(gx, gy, gx, gy + gl);
	}
}
