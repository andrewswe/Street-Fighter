class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.game.play();
  }

  start() {
    this.lastTime = 0;
  }

  animate(time){
  }
}

module.exports = GameView;
