import Const from './constants';

import Grid from './models/grid';
import Snake from './models/snake';

export default function sketch(p) {
  const snake = new Snake(p, { size: Const.GRID_SIZE });
  const grid = new Grid(p);

  p.setup = function () {
    p.frameRate(Const.FRAME_RATE);
    p.createCanvas(Const.WINDOW_SIZE, Const.WINDOW_SIZE);
  };

  p.draw = function () {
    grid.draw();

    snake.update();
    snake.draw();
  };
};