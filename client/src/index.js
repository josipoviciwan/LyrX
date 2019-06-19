//MUST HAVES
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//ROUTER
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
//STYLES
import * as serviceWorker from "./serviceWorker";
//COMPONENTS
import App from "./App";
import Songs from "./components/songs";
import GeneralError from "./components/generalerror";
import Authors from "./components/authors";
import History from "./components/history";
//ROUTER OUTLET
const routing = (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Songs} />
        <Route exact path="/authors" component={Authors} />
        <Route exact path="/history" component={History} />
        <Route component={GeneralError} />
      </Switch>
    </App>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
