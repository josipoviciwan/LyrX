import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { db } from "./firebase/firebase";
import firebase from "firebase";
import {
  AppLayout,
  GeneralError,
  Songs,
  Authors,
  History
} from "./components/";

function updateText(text) {
  return {
    type: "UPDATE",
    text
  };
}

function updateAuthors(data) {
  return {
    type: "UPDATE-AUTHORS",
    polje: [...data]
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

  onUpdateAuthor = e => {
    this.props.dispatch(updateAuthors([1, 2, 3]));
  };

  componentDidMount() {
    // db.collection("authors")
    //   .doc("--allAuthors--")
    //   .onSnapshot(
    //     {
    //       // Listen for document metadata changes
    //       includeMetadataChanges: true
    //     },
    //     this.onUpdateAuthor
    //     // function(doc) {
    //     //   console.log("SLUSAM ", this);
    //     //   // ...
    //     // }
    //   );
    console.log("OVO JE BITNO", this.props);
  }

  render() {
    return (
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
            <input value={this.props.text} onChange={this.onUpdateText} onFocus={this.onUpdateAuthor} />
            <pre style={{ textAlign: "left" }}>
              {JSON.stringify(this.props, undefined, 4)}
            </pre>
          </div>
        </AppLayout>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  text: state.form.text,
  foo: state.form.foo,
  polje: state.form.polje
});

export default connect(mapStateToProps)(App);
