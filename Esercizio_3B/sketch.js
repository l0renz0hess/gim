function setup() {
	createCanvas(windowWidth, windowHeight)

	console.log("che ore analogiche sono?")
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0, 150, 150)

	let s = second()
	let m = minute()
	let h = hour()

	if(s<10){
		s = "0" + s
	}

	if(m<10){
		m = "0" + m
	}

	if(h<10){
		h = "0" + h
	}

	let angolosecondi = s / 60 * TAU
	let angolominuti = m / 60 * TAU
	let angoloore = h / 12 * TAU 

	noStroke()
	
	translate(width/2, height/2)

	
	fill(255)
	ellipse(0, 0, 680, 680)
	
	fill(0, 150, 150)
	rect(-75, 120, 150, 56)
	
	fill(255)
	textSize(30)
	textAlign(CENTER, CENTER)
	text(h + ":" + m + ":" + s, 0, 150)
	
	fill(0, 50, 50)
	for(let i=0; i<60; i++) {
		push()
		rotate(i / 60 * TAU)

		if(i % 5 == 0) {
			rect(310, -7.5, -30, 15)
		} else {
			rect(310, -2.5, -5, 5)
		}
		pop()
	}
	
	push()
	rotate(angoloore)
	rect(-12.5, 20, 25, -200)
	pop()
	
	fill(0, 120, 120)
	
	push()
	rotate(angolominuti)
	rect(-12.5, 20, 25, -250)
	pop()

	
	fill(0, 75, 75)
	
	push()
	rotate(angolosecondi)
	rect(-2.5, 40, 5, -340)
	pop()

	
	ellipse(0, 0, 15)






}