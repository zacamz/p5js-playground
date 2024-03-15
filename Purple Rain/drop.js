class Drop {
    constructor() {
        this.x = random(0, width)
        this.y = this.gety(),
        this.yspeed = random(4,10)
    };

    gety(){
        return random(-1,-500)
    }

    fall() {
        this.y = this.y + this.yspeed
        if (this.y > height){this.y = this.gety()}
    };
    show() {
        stroke(138, 42, 226)
        line(this.x, this.y, this.x, this.y + 10)
    };
}
