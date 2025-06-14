let fiocchi;
let simboliFiocco = ["*", "⁎", "✱", "✲", "✳", "❄", "☆", "★", "❇", "❁", "✿"];

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	fiocchi = [];

	for (let i = 0; i < 300; i++) {
		fiocchi[i] = {
			px: random(0, width),
			py: random(-100),
			dim: random(10, 30),
			vel: random(1, 2),
			col: (random(1) < 0.9)
				? color(random(100, 255)) 
				: color(random(50, 255), random(50, 255), random(50, 255)),
			simbolo: random(simboliFiocco)
		};
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(50);

	for (let i = 0; i < fiocchi.length; i++) {
		fill(fiocchi[i].col);
		textSize(fiocchi[i].dim);

		fiocchi[i].px += random(-1.5, 1.5);
		fiocchi[i].py += fiocchi[i].vel;

		if (fiocchi[i].py > height) {
			fiocchi[i].py = 0;
			fiocchi[i].px = random(0, width);
		}

		text(fiocchi[i].simbolo, fiocchi[i].px, fiocchi[i].py);
	}
}
