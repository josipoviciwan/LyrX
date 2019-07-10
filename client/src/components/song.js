import React from "react";
import { db } from "../firebase/firebase";
class Song extends React.Component {
  state = {
    text: ""
  };
  componentDidMount() {
    let author = this.props.history.location.state.authorName;
    let song = this.props.history.location.state.songName;
    const group = db
      .collection("songs")
      .where("author", "==", author)
      .where("song", "==", song);
    group.get().then(querySnapshot => {
      this.setState({ text: querySnapshot.docs[0].data().text });
    });
  }
  render() {
    return (
      <div className="container">
        <h1>{this.props.history.location.state.songName}</h1>
        <h3>{this.props.history.location.state.authorName}</h3>
        <div className="songText">{this.state.text}</div>
      </div>
    );
  }
}

export default Song;
