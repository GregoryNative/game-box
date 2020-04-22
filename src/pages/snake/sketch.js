import GameFactory from './factories/GameFactory';

export default function sketch(name) {
  return (p) => {
    const game = GameFactory(name, p);

    game.init();
  }
};
