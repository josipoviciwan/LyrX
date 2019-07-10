import React from "react";
import { connect } from "react-redux";

class Authors extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="authorsList">
          {this.props.authors.sort().map((e, i) => (
            <li key={i} className="authorsListElement">
              {e}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  authors: state.lyrx.authors
}))(Authors);
