import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { Link, Route, Switch } from "react-router-dom";

import '../../App.css';

import sketch from './sketch';

function SnakeGame({ name }) {
  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Snake</h1>
      <P5Wrapper sketch={sketch(name)} />
    </div>
  );
}
function IndexRoute() {
  return (
    <header className="App-header">
      <ul>
        <li className="li-header">
          Snake
        </li>
        <li>
          <Link to="/snake/classic">Classic</Link>
        </li>
        <li>
          <Link to="/snake/fast">Fast</Link>
        </li>
        <li>
          <Link to="/snake/small">Small</Link>
        </li>
      </ul>
    </header>
  );
}

function SnakeRouteIndex() {
  return (
    <div className="App">
      <Switch>
        <Route path="/snake/classic">
          <SnakeGame name="classic" />
        </Route>
        <Route path="/snake/fast">
          <SnakeGame name="fast" />
        </Route>
        <Route path="/snake/small">
          <SnakeGame name="small" />
        </Route>
        <Route path="/snake/">
          <IndexRoute />
        </Route>
      </Switch>
    </div>
  );
}

export default SnakeRouteIndex;
