let way = 4; //0:up 1:right 2:down 3:left

let pacman;
let dots = [];

function setup() {
	createCanvas(500, 500);
	angleMode(DEGREES);
	pacman = new Pacman();
	for (let i = 0; i < 3; i++) {
		dots.push(new Dot());
	}

}

function draw() {
	//translate(pacman.x,pacman.y);//pacmanı hızlandırıyor neden bilmiyorum
	background(0);

	pacman.show(way);
	pacman.update(way);
	for (let i =  dots.length-1; i > 0; i--) {
		isIntersect = pacman.eat(pacman.x, pacman.y, dots[i].x, dots[i].y, dots[i].size);

		if (dots.length-1 < 2) {
			dots.push(new Dot());
		}
		
		var isIntersect;
		if(isIntersect){
			
			 dots.splice(i,1);
		}
		else
		dots[i].show();
	}




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
