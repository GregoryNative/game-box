import Food from '../models/food';
import Snake from '../models/snake';

import * as Utils from '../utils/math';

function ShapeFactory(name, p, options) {
  const params = {
    size: options.GRID_SIZE,
    window: options.WINDOW_SIZE,
    position: generatePosition(options),
  };

  if (name === 'food') {
    return new Food(p, params);
  }

  if (name === 'snake') {
    return new Snake(p, params);
  }

  return {};
}

function generatePosition(options) {
  const x = getRandomPosition(options);
  const y = getRandomPosition(options);

  return { x, y };
}

function getRandomPosition(options) {
  return Utils.getRandomInt(0, options.WINDOW_SIZE / options.GRID_SIZE) * options.GRID_SIZE;
}

export default ShapeFactory;