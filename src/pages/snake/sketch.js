import Game from './models/game';

export default function sketch(p) {
  const game = new Game(p);

  game.init();

  // setTimeout(() => {
  //   game.start();
  //
  //   setTimeout(() => {
  //     game.stop();
  //   }, 5000);
  // }, 5000);
};
