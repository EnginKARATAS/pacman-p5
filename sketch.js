let way = 4; //0:up 1:right 2:down 3:left

let pacman;

function setup() {
	createCanvas(500, 500);
	angleMode(DEGREES);
	pacman = new Pacman();

}

function draw() {
	translate(pacman.x,pacman.y);
	background(0);
	pacman.show();
	pacman.update(way);

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		way = 0;
	}
	if (keyCode === RIGHT_ARROW) {
		way = 1;
	}
	if (keyCode === DOWN_ARROW) {
		way = 2;
	}
	if (keyCode === LEFT_ARROW) {
		way = 3;
	}
}
