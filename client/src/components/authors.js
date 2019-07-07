import React from "react";
import { FirestoreCollection, FirestoreDocument } from "react-firestore";

class Authors extends React.Component {
  render() {
    return (
      <div>
        <h1>Authors works</h1>
        <ul>
          <li>Authors radi</li>
          <li>Neki teksti i state: </li>
        </ul>
        <FirestoreDocument
          path="Lyr-X-data/Edo Maajka"
          render={({ isLoading, data }) => {
            return isLoading ? (
              <div>JEbiga brate neide</div>
            ) : (
              <div>
                <h1>Stories</h1>
                <ul>
                  <li>{data.Bomba}</li>
                  <li>{JSON.stringify(data)}</li>
                </ul>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default Authors;
