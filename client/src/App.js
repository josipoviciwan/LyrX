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
import configureStore from "./redux/store";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

const { store, persistor } = configureStore();

function updateText(text) {
  return {
    type: "UPDATE",
    text
  };
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  onUpdateText = e => {
    this.props.dispatch(updateText(e.nativeEvent.target.value));
  };
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <AppLayout>
              <Switch>
                <Route exact path="/" component={Songs} />
                <Route exact path="/authors" component={Authors} />
                <Route exact path="/history" component={History} />
                <Route component={GeneralError} />
              </Switch>
              <div style={styles}>
                <h2>Start editing to see some magic happen {"\u2728"}</h2>
                <input value={this.props.text} onChange={this.onUpdateText} />
                <pre style={{ textAlign: "left" }}>
                  {JSON.stringify(this.props.foo, undefined, 2)}
                </pre>
              </div>
            </AppLayout>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  text: state.form.text,
  foo: state.form.foo
});

export default connect(mapStateToProps)(App);
