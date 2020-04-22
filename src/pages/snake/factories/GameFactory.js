import Const from '../constants';

import Game from '../models/game';

function GameFactory(name, p) {
  const options = Const;

  if (name === 'classic') {
    return new Game(p, options);
  }

  if (name === 'fast') {
    return new Game(p, {
      ...options,
      FRAME_RATE: 45,
    });
  }


  if (name === 'small') {
    return new Game(p, {
      ...options,
      WINDOW_SIZE: 300,
    });
  }

  return {};
}

export default GameFactory;