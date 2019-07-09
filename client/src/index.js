//MUST HAVES
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
//STYLES
import "./index.css";
//COMPONENTS
import App from "./App";
import configureStore from "./redux/store";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import firebase from "@firebase/app";
import "@firebase/firestore";
import { FirestoreProvider } from "react-firestore";

import { db } from "./firebase/firebase";
const { store, persistor } = configureStore();

const mapStateToProps = state => ({
  text: state.form.text,
  foo: state.form.foo
});

const ConnectedApp = connect(mapStateToProps)(App);

const config = {
  apiKey: "AIzaSyBoTxoYqKOpLd4CBzxau1G8tHvQOlF9kGY",
  authDomain: "lyrx-app.firebaseapp.com",
  projectId: "lyrx-app"
};
// firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <FirestoreProvider firebase={firebase}>
        <ConnectedApp />
      </FirestoreProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
