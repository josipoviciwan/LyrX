import React from "react";

import {
  AppLayout,
  GeneralError,
  Songs,
  Authors,
  History
} from "./components/";
//ROUTER
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
//REDUX
import { createStore } from "redux";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { default as Todos } from "./views/Todos";

class App extends React.Component {
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (!response.ok) {
      throw Error(body.message);
    }

    return body;
  };

  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <AppLayout>
            <Switch>
              <Route exact path="/" component={Songs} />
              <Route exact path="/authors" component={Authors} />
              <Route exact path="/history" component={History} />
              <Route exact path="/todo" component={Todos} />
              <Route component={GeneralError} />
            </Switch>
          </AppLayout>
        </Router>
      </Provider>
    );
  } //LVRATI ZADNJU HISTORY
}

export default App;
