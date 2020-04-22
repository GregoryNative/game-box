import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import '../../App.css';

import sketch from './sketch';

function SnakeGame() {
  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Snake</h1>
      <P5Wrapper sketch={sketch} />
    </div>
  );
}

export default SnakeGame;
