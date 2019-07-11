import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
class History extends React.Component {
  render() {
    return (
      <div className="history-container">
        <h2>History</h2>
        <ul className="histroy-songsList">
          {this.props.songs.map((l, i) => (
            <li key={i} className="songListItem">
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to={{
                  pathname: "/song",
                  state: {
                    authorName: l.author,
                    songName: l.song
                  }
                }}
              >
                <div className="songName">{l.song}</div>
                <div className="authorName">{l.author}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  songs: state.lyrx.songs
}))(History);
