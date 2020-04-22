import Const from '../constants';

import Grid from './grid';

import ShapeFactory from '../factories/ShapeFactory';

function Game(p) {
  this.p = p;

  this.grid = new Grid(p);
  this.snake = null;
  this.food = null;
}

Game.prototype.init = function() {
  this.p.setup = this.setup.bind(this);
  this.p.draw = () => {
    this.food.draw();
    this.snake.draw();
  }
}

Game.prototype.start = function() {
  this.p.setup = this.setup.bind(this);
  this.p.draw = this.draw.bind(this);
  this.p.keyPressed = this.keyPressed.bind(this);
}

Game.prototype.stop = function() {
  this.init();
}

Game.prototype.setup = function() {
  this.p.frameRate(Const.FRAME_RATE);
  this.p.createCanvas(Const.WINDOW_SIZE, Const.WINDOW_SIZE);
  this.grid.draw();

  this.snake = ShapeFactory('snake', this.p);
  this.food = ShapeFactory('food', this.p);
}

Game.prototype.draw = function() {
  this.grid.draw();
  if (this.snake.canEat(this.food)) {
    this.snake.eat();
    this.food = ShapeFactory('food', this.p);
  }

  this.food.draw();

  this.snake.death();
  this.snake.update();
  this.snake.draw();
}

Game.prototype.keyPressed = function() {
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