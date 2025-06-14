function setup() {
	createCanvas(windowWidth, windowHeight);
	console.log("che ore analogiche sono?");
	colorMode(HSB, 360, 100, 100);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	let m = minute();
let coloreSfondo = color((m * 6) % 360, 80, 80);
background(coloreSfondo);


	let s = second();
	let h = hour();

	if (s < 10) {
		s = "0" + s;
	}

	if (m < 10) {
		m = "0" + m;
	}

	if (h < 10) {
		h = "0" + h;
	}

	let angolosecondi = s / 60 * TAU;
	let angolominuti = m / 60 * TAU;
	let angoloore = ((h % 12) + m / 60) / 12 * TAU;

	noStroke();
	translate(width / 2, height / 2);

	// Cerchi orbitanti decorativi
let numOrbitali = 8;
let raggioOrbita = 500;
let velocita = 0.002;

for (let i = 0; i < numOrbitali; i++) {
	let angolo = frameCount * velocita + i * TWO_PI / numOrbitali;
	let x = cos(angolo) * raggioOrbita;
	let y = sin(angolo) * raggioOrbita;

	fill(255, 200);
	noStroke();
	ellipse(x, y, 30); // dimensione delle sfere orbitanti
}


	// Quadrante
	fill(255);
	ellipse(0, 0, 680, 680);

	// Sfondo display digitale
	fill(0, 150, 150);
	rect(-75, 120, 150, 56);

	// Testo orario digitale
	fill(255);
	textSize(30);
	textAlign(CENTER, CENTER);
	text(h + ":" + m + ":" + s, 0, 150);

	// Tacche orologio
	fill(0, 50, 50);
	for (let i = 0; i < 60; i++) {
		push();
		rotate(i / 60 * TAU);
		if (i % 5 == 0) {
			rect(310, -7.5, -30, 15);
		} else {
			rect(310, -2.5, -5, 5);
		}
		pop();
	}

	// Lancetta ore
	fill(0, 50, 50);
	push();
	rotate(angoloore);
	rect(-10, 20, 20, -150);  // più corta e più spessa
	pop();

	// Lancetta minuti
	fill(0, 120, 120);
	push();
	rotate(angolominuti);
	rect(-7, 20, 14, -220);  // media lunghezza e spessore
	pop();

	// Lancetta secondi
	fill(0, 75, 75);
	push();
	rotate(angolosecondi);
	rect(-2, 40, 4, -290);  // più lunga e sottile
	pop();

	

	// Centro
	fill(0);
	ellipse(0, 0, 15);

	
}
