import Ken from './ken.js';
import Controller from './controller.js';

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.ken = new Ken(ctx);
    Controller(this.ken);
  }

  play(){
    this.draw(this.ctx);
  }

  draw(){
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    let ken = new Ken(this.ctx);
    ken.go();
  }
}

Game.BG_COLOR = "white";
Game.DIM_X = 950;
Game.DIM_Y = 300;
Game.FPS = 32;

export default Game;
