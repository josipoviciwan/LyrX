import React from "react";
//ROUTER
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import {
  AppLayout,
  GeneralError,
  Songs,
  Authors,
  History
} from "./components/";

const App = ({ children }) => (
  <Router>
    <AppLayout>
      <Switch>
        <Route exact path="/" component={Songs} />
        <Route exact path="/authors" component={Authors} />
        <Route exact path="/history" component={History} />
        <Route component={GeneralError} />
      </Switch>
    </AppLayout>
  </Router>
);

export default App;
