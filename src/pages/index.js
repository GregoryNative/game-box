import React from 'react';
import { Link } from "react-router-dom";

import '../App.css';

function IndexRoute() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li className="li-header">
            Games
          </li>
          <li>
            <Link to="/snake">Snake</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default IndexRoute;
