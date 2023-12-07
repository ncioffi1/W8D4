
// import CONSTANTS from "./constants";

export default class Bird {


    constructor(canvasWidth, canvasHeight) {
        this.velocity = 0;
        this.positionX = 213;
        this.positionY = 240;

        this.gravity = 0.8;
        this.flap_speed = -8;
        this.terminal_vel = 12;
        this.bird_width = 40;
        this.bird_height = 30;
        // height="640" width="480"
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.positionX, this.positionY, this.bird_width, this.bird_height);
    }

    animate(ctx) {
        this.move();
        this.drawBird(ctx);
    }

    move() {
        this.positionY += this.velocity;
        this.velocity += this.gravity;
        if (this.velocity > this.terminal_vel) {
            this.velocity = this.terminal_vel;
        }
    }

    flap() {
        this.velocity = this.flap_speed;
    }
}
