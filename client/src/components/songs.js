import React from "react";
import { connect } from "react-redux";
import { getPersistActions } from "../redux/persistActions";
import { NavLink } from "react-router-dom";

class Songs extends React.Component {
  componentDidMount() {
    this.setState({
      searchBar: this.props.search
    });
  }

  render() {
    let searchString = this.props.search.slice(0, -1);
    searchString = searchString
      .trim()
      .toLowerCase()
      .replace("đ", "d")
      .replace("ž", "z")
      .replace("ć", "c")
      .replace("č", "c")
      .replace("š", "s");
    let filteredSongs = [...this.props.songsList].filter(function(song) {
      if (searchString.length) {
        return (song.song + " " + song.author + " " + song.song)
          .toLowerCase()
          .includes(searchString);
      } else return (song.song + " " + song.author).toLowerCase().includes("a");
    });
    return (
      <div className="container">
        <div className="input-wrapper">
          <input
            value={this.props.search}
            onChange={this.props.updateSearch}
            placeholder="Search songs..."
          />
        </div>
        <ul className="songsList">
          {filteredSongs.slice(0, 50).map((l, i) => {
            return (
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
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    songsList: state.lyrx.songsList,
    search: state.lyrx.search
  }),
  dispatch => ({
    updateSearch: e => {
      dispatch(getPersistActions.updateSearch(e.nativeEvent.target.value));
    }
  })
)(Songs);
