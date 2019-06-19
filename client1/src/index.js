import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

//COMPONENTS

import Songs from "./components/songs";
import Authors from "./components/authors";
import History from "./components/history";

//ROUTING
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <nav>
      <ul className="navList">
        <li>
          <NavLink activeClassName="is-active" exact={true} to="/">
            Songs
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/authors">
            Authors
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/history">
            History
          </NavLink>
        </li>
      </ul>

      <Route exact path="/" component={Songs} />
      <Route path="/authors" component={Authors} />
      <Route path="/history" component={History} />
    </nav>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
