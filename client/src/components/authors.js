import React from "react";

class Authors extends React.Component {


  render() {
    return (
      <div>
        <h1>Authors works</h1>
        <ul>
          <li>{JSON.stringify(this.state.data)}</li>
          <li>Neki teksti i state: {this.state | JSON}</li>
        </ul>
      </div>
    );
  }
}

export default Authors;
