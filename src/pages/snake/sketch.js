import Const from './constants';

import Grid from './models/grid';
import Snake from './models/snake';

import FoodFactory from './factories/FoodFactory';

export default function sketch(p) {
  const snake = new Snake(p, { size: Const.GRID_SIZE, window: Const.WINDOW_SIZE });
  const grid = new Grid(p);
  let food;

  p.setup = function() {
    p.frameRate(Const.FRAME_RATE);
    p.createCanvas(Const.WINDOW_SIZE, Const.WINDOW_SIZE);
    food = FoodFactory(p);
  };

  p.draw = function() {
    grid.draw();

    if (snake.canEat(food)) {
      snake.eat();
      food = FoodFactory(p);
    }

    food.draw();

    snake.update();
    snake.draw();
  };

  p.keyPressed = function() {
    switch(p.keyCode) {
      case p.UP_ARROW: {
        snake.direction(0, -1);
        break;
      }
      case p.DOWN_ARROW: {
        snake.direction(0, 1);
        break;
      }
      case p.RIGHT_ARROW: {
        snake.direction(1, 0);
        break;
      }
      case p.LEFT_ARROW: {
        snake.direction(-1, 0);
        break;
      }
    }
  }
};