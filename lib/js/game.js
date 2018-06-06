import Ken from './ken.js';
import Controller from './controller.js';

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.ken = new Ken(ctx);
    Controller(this.ken);
    this.startGame(this.ctx);
  }

  play(){
    this.ken.update();
    this.ken.go();
    window.ken = this.ken;
  }

  startGame(){
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  }
}

Game.BG_COLOR = "white";
Game.DIM_X = 950;
Game.DIM_Y = 300;
Game.FPS = 32;

export default Game;
