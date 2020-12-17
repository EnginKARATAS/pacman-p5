let way = 4; //0:up 1:right 2:down 3:left
let score = 0;
let pacman;
let dots = [];
let isInGame = false;
var endDate;
var startDate;
let gamestartedsec;
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

	if (score == 0) {
		isInGame = false;
		textSize(70)

		second = 0;

		text("Reach 50 ", 40, height * 0.5)
		text("If you can ", 40, height * 0.7)
	}
	else if (score > 0 && score <= 3) {
		  startDate = new Date();
		isInGame = true;
		textSize(25)
		fill(random(0, 255), random(0, 255), random(0, 255));
		text("SCORE :" + score, 20, height * 0.1)
		textSize(20)
		text("TIME:" +  startDate.getTime()/1000, 350, height * 0.09)
	}

	else {
		  endDate   = new Date();
		var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
		console.log(seconds);
		isInGame = false;
		pacman.size = 0;
		pacman.y = 1306;
		textSize(40);
		fill(random(0, 255), random(0, 255), random(0, 255));
		text("SCORE :" + score, 40, height * 0.3)
		text("TIME :" + seconds + "SECOND", 40, height * 0.5)
		fill(255);
		textSize(70);
		text("YOU WON!", 40, height * 0.1)
	}


	pacman.show(way);
	pacman.update(way);
	for (let i = dots.length - 1; i > 0; i--) {
		isIntersect = pacman.eat(pacman.x, pacman.y, dots[i].x, dots[i].y, dots[i].size);

		if (dots.length - 1 < 4) {
			dots.push(new Dot());
		}

		var isIntersect;
		if (isIntersect) {
			score++;
			dots.splice(i, 1);
		}
		else
			dots[i].show();
	}

	if (frameCount % 140 == 0)
		if (isInGame)
			score -= 1;




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
