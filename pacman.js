class Pacman {
	constructor() {
		this.x = 150;
		this.y = 150;
		this.angMouth = 0;
		this.eyeX = 10;
		this.eyeY = 17;
		this.rotation = 0;
		this.angel = 20;
		this.size = 30;
	}
	eat(pacmanX, pacmanY, dotX, dotY,dotSize) {
		let distance = dist(pacmanX, pacmanY, dotX, dotY);

		if (distance >= 0 && distance < 30) {
			console.log("bir kere girdi");
			this.size += dotSize;
			return true;//true == shift
		}

		else {
			if (this.size > 30) {

				this.size -= 0.1;
			}
			return false;
		}

	}
	show() {
		//	fill(random(0,255),random(0,255),random(0,255));
		fill(255, 255, 0);
		//		translate(this.x, this.y)
		//angleMode(DEGREES);
		arc(this.x, this.y, this.size, this.size, this.rotation + this.angel - cos(this.angMouth) * this.angel, this.rotation - this.angel + cos(this.angMouth) * this.angel);
		this.angMouth += 15; //speed mouth
		fill(0);
		ellipse(this.x - this.eyeX, this.y - this.eyeY, 8)
	}
	update(way) {
		if (way == 0) {
			this.y -= 5;
			this.rotation = 270;
			this.eyeX = +20;
			this.eyeY = 10;

		} else if (way == 1) {
			this.x += 5;
			this.eyeX = 10;
			this.eyeY = 17;
			this.rotation = 0;

		} else if (way == 2) {
			this.y += 5;

			this.rotation = 90;

		} else if (way == 3) {
			this.x -= 5;
			this.eyeX = 10;
			this.eyeY = 17;
			this.rotation = 180;
		}
	}
}
