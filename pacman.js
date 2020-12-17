class Pacman {
	constructor() {
		this.x = 150;
		this.y = 150;
		this.angMouth = 50;
	}
	show() {
//	fill(random(0,255),random(0,255),random(0,255));

		fill(255, 255, 0);
		//		translate(this.x, this.y)
		//angleMode(DEGREES);
		arc(this.x, this.y, 80, 80, 30 - cos(this.angMouth) * 25, 330 + cos(this.angMouth) * 25);
		this.angMouth += 9;
		fill(0);
		ellipse(this.x - 10, this.y - 17, 8)
	}
	update(way) {
		if (way == 0)
			this.y -= 5;
		else if (way == 1)
			this.x += 5;
		else if (way == 2)
			this.y += 5;
		else if (way == 3)
			this.x -= 5;
	}
}
