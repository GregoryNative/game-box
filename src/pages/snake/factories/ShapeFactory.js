import Const from '../constants';

import Food from '../models/food';
import Snake from '../models/snake';

import * as Utils from '../utils/math';

function ShapeFactory(name, p) {
  const options = {
    size: Const.GRID_SIZE,
    window: Const.WINDOW_SIZE,
    position: generatePosition(),
  };

  if (name === 'food') {
    return new Food(p, options);
  }

  if (name === 'snake') {
    return new Snake(p, options);
  }

  return {};
}

function generatePosition() {
  const x = getRandomPosition();
  const y = getRandomPosition();

  return { x, y };
}

function getRandomPosition() {
  return Utils.getRandomInt(0, Const.WINDOW_SIZE / Const.GRID_SIZE) * Const.GRID_SIZE;
}

export default ShapeFactory;