import React from "react";
import { connect } from "react-redux";

class Songs extends React.Component {
  render() {
    return (
      <ul>
        {this.props.songsList.map((e, i) => (
          <li key={i}>
            Pjesma: {e.song} <br />
            Author: {e.author}
            <br />
            ------------
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(state => ({
  songsList: state.lyrx.songsList
}))(Songs);
