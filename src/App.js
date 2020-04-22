import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import IndexRoute from "./pages";
import SnakeGameRoute from "./pages/snake";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/snake">
          <SnakeGameRoute/>
        </Route>
        <Route path="/">
          <IndexRoute />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
