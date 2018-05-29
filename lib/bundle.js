/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/js/street_fighter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/js/controller.js":
/*!******************************!*\
  !*** ./lib/js/controller.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Controller = (player) => {
  $(document).keydown(function(e) {
  //if the user pressed 'D'
  if(e.keyCode === 65) {
    player.moveLeft();
  }
  else if(e.keyCode === 68) {
    player.moveRight();
  }
  else if(e.keyCode === 87) {
    player.jump();
  }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Controller);


/***/ }),

/***/ "./lib/js/game.js":
/*!************************!*\
  !*** ./lib/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ken_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ken.js */ "./lib/js/ken.js");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./lib/js/controller.js");



class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.ken = new _ken_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    Object(_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.ken);
  }

  play(){
    this.draw(this.ctx);
  }

  draw(){
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    let ken = new _ken_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx);
    ken.go();
  }
}

Game.BG_COLOR = "white";
Game.DIM_X = 950;
Game.DIM_Y = 300;
Game.FPS = 32;

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./lib/js/game_view.js":
/*!*****************************!*\
  !*** ./lib/js/game_view.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./lib/js/ken.js":
/*!***********************!*\
  !*** ./lib/js/ken.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite.js */ "./lib/js/sprite.js");


class Ken {
  constructor(context){

    this.props = {
      numFrames: 0,
      ctx: context,
      img: "lib/images/ken.png",
      moving: false,
      srcX: 0,
      srcY: 80,
      width: 65,
      height: 80,
      dx: 0,
      dy: 170
    };


    this.go = this.go.bind(this);
    this.render = this.render.bind(this);
  }

  go(){
    if(!this.moving){
      this.render();
    }
  }

  update(){

  }

  chill(){
    this.props.numFrames = 4;
    for(let i = 0; i < this.props.numFrames; i++){
      this.props.srcX += 65 * i;
      this.render();
    }
    this.props.srcX = 0;
  }

  clear(){
    this.props.ctx.clearRect(
      this.props.dx,
      this.props.dy,
      this.props.width * 1.4,
      this.props.height * 1.4
    );
  }

  moveLeft(){
    this.props.numFrames = 4;
    this.clear();
    this.props.dx -= 10;
    this.render();
  }

  moveRight(){
    this.clear();
    this.props.dx += 10;
    this.render();
  }

  jump(){
    this.clear();
    this.props.dy -= 40;
    this.render();
  }

  render(){
    let spr = new Image();
    spr.src = this.props.img;

    spr.onload = () => {
      this.props.ctx.drawImage(
        spr,
        this.props.srcX,
        this.props.srcY,
        this.props.width,
        this.props.height,
        this.props.dx,
        this.props.dy,
        this.props.width * 1.4,
        this.props.height * 1.4
      );
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Ken);


/***/ }),

/***/ "./lib/js/sprite.js":
/*!**************************!*\
  !*** ./lib/js/sprite.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Sprite {
  
}


/* harmony default export */ __webpack_exports__["default"] = (Sprite);


/***/ }),

/***/ "./lib/js/street_fighter.js":
/*!**********************************!*\
  !*** ./lib/js/street_fighter.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./lib/js/game.js");
/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view.js */ "./lib/js/game_view.js");
/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_view_js__WEBPACK_IMPORTED_MODULE_1__);



document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-view");
  canvas.width = _game_js__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_X;
  canvas.height = _game_js__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_Y;

  const ctx = canvas.getContext("2d");
  const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  const gameview = new _game_view_js__WEBPACK_IMPORTED_MODULE_1___default.a(game, ctx).start();
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map