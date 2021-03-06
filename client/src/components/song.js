import React from "react";
import { db } from "../firebase/firebase";
import { connect } from "react-redux";
import { getPersistActions } from "../redux/persistActions";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
class Song extends React.Component {
  state = {
    text: ""
  };
  componentDidMount() {
    let author = this.props.history.location.state.authorName;
    let song = this.props.history.location.state.songName;
    let filtered = this.props.songs.filter(
      obj => obj.song === song && obj.author === author
    );
    if (filtered.length) {
      this.setState({ text: filtered[0].text });
    } else {
      const group = db
        .collection("songs")
        .where("author", "==", author)
        .where("song", "==", song);
      group.get().then(querySnapshot => {
        if (querySnapshot.docs.length) {
          this.setState({ text: querySnapshot.docs[0].data().text });
          this.props.addSong({
            author,
            song,
            text: querySnapshot.docs[0].data().text
          });
        } else this.setState({ text: "Text offline nije dostupan..." });
      });
    }
  }
  render() {
    return (
      <div className="song-container">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          <button className="back-button">
            <FontAwesomeIcon icon={faLongArrowAltLeft} />
          </button>
        </NavLink>

        <h2 className="song-title">
          {this.props.history.location.state.songName}
        </h2>
        <h3 className="song-author">
          {this.props.history.location.state.authorName}
        </h3>
        <div className="songText">{this.state.text}</div>
      </div>
    );
  }
}

export default connect(
  state => ({
    songs: state.lyrx.songs
  }),
  dispatch => ({
    addSong: song => dispatch(getPersistActions.addSong(song))
  })
)(Song);
