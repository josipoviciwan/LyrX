import React from "react";
import { connect } from "react-redux";
import { getPersistActions } from "../redux/persistActions";
import { Link, NavLink } from "react-router-dom";
class Songs extends React.Component {
  componentDidMount() {
    this.setState({
      searchBar: this.props.search
    });
  }

  render() {
    let searchString = this.props.search
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace("đ", "d");

    return (
      <div>
        <input value={this.props.search} onChange={this.props.updateSearch} />
        <ul>
          {searchString.length > 3 &&
            this.props.songsList
              .filter(function(song) {
                return (
                  song.song.toLowerCase().match(searchString) ||
                  song.author.toLowerCase().match(searchString)
                );
              })
              .map((l, i) => {
                return (
                  <li key={i}>
                    {l.song}
                    <NavLink
                      to={{
                        pathname: "/song",
                        state: {
                          authorName: l.author,
                          songName: l.song
                        }
                      }}
                    >
                      Na pjesmu
                    </NavLink>
                    <strong style={{ color: "yellow" }}>{l.author}</strong>
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
    updateSearch: e =>
      dispatch(getPersistActions.updateSearch(e.nativeEvent.target.value))
  })
)(Songs);
