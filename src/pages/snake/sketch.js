import Const from './constants';

import Food from './models/food';
import Grid from './models/grid';
import Snake from './models/snake';

export default function sketch(p) {
  const snake = new Snake(p, { size: Const.GRID_SIZE, window: Const.WINDOW_SIZE });
  const grid = new Grid(p);
  let food;

  p.setup = function() {
    p.frameRate(Const.FRAME_RATE);
    p.createCanvas(Const.WINDOW_SIZE, Const.WINDOW_SIZE);
    food = new Food(p, {
      size: Const.GRID_SIZE,
      position: {
        x: Const.GRID_SIZE,
        y: Const.GRID_SIZE * 7,
      }
    });
  };

  p.draw = function() {
    grid.draw();

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