class Dot {
    constructor() {
        this.x = random(10, width - 10);
        this.y = random(10, height - 10);
        this.size = random(5, 20);
    }
    show() {
        fill(random(255), random(255), random(255));
        ellipse(this.x, this.y, this.size)
    }
    
}