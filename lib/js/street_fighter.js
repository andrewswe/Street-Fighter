import Game from './game.js';
import GameView from './game_view.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-view");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;

  const ctx = canvas.getContext("2d");
  const game = new Game(ctx);
  const gameview = new GameView(game, ctx).start();
});
