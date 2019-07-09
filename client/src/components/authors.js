import React from "react";
import { connect } from "react-redux";

class Authors extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.authors.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  authors: state.lyrx.authors
}))(Authors);
