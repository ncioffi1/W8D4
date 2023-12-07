import Level from "./level";
import Bird from "./bird";

export default class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  animate() {
    console.log('test');
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    requestAnimationFrame(this.animate);
  }

  restart() {
      this.level = new Level(this.dimensions);
      this.bird = new Bird(this.canvas.width, this.canvas.height)
      // this.running = false;
      this.animate();
  }

  // play() {
  //   this.running = true;
  //   this.animate();

  // }


}

