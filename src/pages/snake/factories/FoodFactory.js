import Const from '../constants';
import Food from '../models/food';
import * as Utils from '../utils/math';

function FoodFactory(p) {
  const options = {
    size: Const.GRID_SIZE,
    position: generatePosition(),
  };

  return new Food(p, options);
}

function generatePosition() {
  const x = getRandomPosition();
  const y = getRandomPosition();

  return { x, y };
}

function getRandomPosition() {
  return Utils.getRandomInt(0, Const.WINDOW_SIZE / Const.GRID_SIZE) * Const.GRID_SIZE;
}

export default FoodFactory;