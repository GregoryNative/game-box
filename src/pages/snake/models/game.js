import Const from '../constants';

import Grid from './grid';

import ShapeFactory from '../factories/ShapeFactory';

function Game(p, options) {
  this.p = p;
  this.options = options;

  this.grid = new Grid(p, this.options);
  this.snake = ShapeFactory('snake', this.p, this.options);
  this.food = ShapeFactory('food', this.p, this.options);

  this.gameIsPaused = true;
  this.score = 0;
}

Game.prototype.init = function() {
  this.p.setup = this.setup.bind(this);

  this.p.draw = () => {};

  this.p.keyPressed = () => {
    if (this.p.keyCode === Const.KEYCODE_SPACE) {
      this.start();
    }
  };
}

Game.prototype.start = function() {
  this.gameIsPaused = false;
  this.p.draw = this.draw.bind(this);
  this.p.keyPressed = this.keyPressed.bind(this);
}

Game.prototype.resume = function() {
  this.gameIsPaused = false;
}

Game.prototype.stop = function() {
  this.gameIsPaused = true;
}

Game.prototype.setup = function() {
  this.p.frameRate(this.options.FRAME_RATE);
  this.p.createCanvas(this.options.WINDOW_SIZE, this.options.WINDOW_SIZE);
  this.grid.draw();
  this.food.draw();
  this.snake.draw();

  this.pausedGameDraw();
}

Game.prototype.draw = function() {
  this.grid.draw();
  if (this.snake.canEat(this.food)) {
    this.snake.eat();
    this.food = ShapeFactory('food', this.p, this.options);
  }

  this.food.draw();

  if (this.snake.isNotAlive()) {
    this.score = this.snake.getScore();
    this.snake.death();
    this.gameIsPaused = true;
  }

  !this.gameIsPaused && this.snake.update();
  this.snake.draw();

  this.pausedGameDraw();
}

Game.prototype.pausedGameDraw = function() {
  if (!this.gameIsPaused) return;

  this.p.fill('rgba(0,0,0, 0.7)');
  this.p.rect(0, 0, this.options.WINDOW_SIZE, this.options.WINDOW_SIZE);

  this.p.textSize(22);
  this.p.textAlign(this.p.CENTER);
  this.p.fill('white');
  this.p.text('Press <SPACE> to start or pause', 0, this.options.WINDOW_SIZE / 2 - 50, this.options.WINDOW_SIZE);

  if (this.score > 0) {

    this.p.textSize(25);
    this.p.fill('yellow');
    this.p.text(`Congratulation: Your score is ${this.score}`, 0, this.options.WINDOW_SIZE / 2, this.options.WINDOW_SIZE);
  }
}

Game.prototype.keyPressed = function() {
  if (this.p.keyCode === Const.KEYCODE_SPACE) {
    if (this.gameIsPaused) {
      this.resume();
    } else {
      this.stop();
    }
  }

  if (this.gameIsPaused) return;

  switch(this.p.keyCode) {
    case this.p.UP_ARROW: {
      this.snake.direction(0, -1);
      break;
    }
    case this.p.DOWN_ARROW: {
      this.snake.direction(0, 1);
      break;
    }
    case this.p.RIGHT_ARROW: {
      this.snake.direction(1, 0);
      break;
    }
    case this.p.LEFT_ARROW: {
      this.snake.direction(-1, 0);
      break;
    }
  }
}

export default Game;