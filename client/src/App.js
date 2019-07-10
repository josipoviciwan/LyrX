import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { db, rtdb } from "./firebase/firebase";
import { getPersistActions } from "./redux/persistActions";
import {
  AppLayout,
  GeneralError,
  Songs,
  Authors,
  History,
  Song
} from "./components/";

class App extends React.Component {
  componentDidMount() {
    const group = db.collection("authors").doc("--allAuthors--");
    group.get().then(querySnapshot => {
      const data = querySnapshot.data();
      this.props.updateAuthors(data.allAuthors);
    });

    rtdb
      .ref("/data")
      .once("value")
      .then(querySnapshot => {
        const data = querySnapshot.val();
        this.props.updateSongsList(data);
      });
  }

  render() {
    return (
      <Router>
        <AppLayout>
          <Switch>
            <Route exact path="/" component={Songs} />
            <Route exact path="/authors" component={Authors} />
            <Route exact path="/history" component={History} />
            <Route exact path="/song" component={Song} />
            <Route component={GeneralError} />
          </Switch>
        </AppLayout>
      </Router>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    updateAuthors: authors =>
      dispatch(getPersistActions.updateAuthors(authors)),
    updateSongsList: songsList =>
      dispatch(getPersistActions.updateSongs(songsList)),
    addSong: song => dispatch(getPersistActions.addSong(song))
  })
)(App);
