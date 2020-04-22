import Game from './models/game';

export default function sketch(p) {
  const game = new Game(p);

  game.init();
};
