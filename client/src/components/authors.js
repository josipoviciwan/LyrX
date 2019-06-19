import React from "react";

class Authors extends React.Component {
  state = {
    data: null
  };
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  componentDidMount() {

    
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express } ))
      .catch(err => console.log(err));
  }

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
