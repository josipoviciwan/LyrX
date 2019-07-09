//MUST HAVES
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
//STYLES
import "./index.css";
//COMPONENTS
import App from "./App";
//Redux-persist
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
