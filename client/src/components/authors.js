import React from "react";
import { FirestoreDocument } from "react-firestore";
import { connect } from "react-redux";
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
          path="authors/--allAuthors--"
          render={({ isLoading, data }) => {
            return isLoading ? (
              <div>Loading ..</div>
            ) : (
              <div>
                <h1>Stories</h1>
                <ul>
                  {data.allAuthors.sort().map((author, i) => (
                    <li className="songText" key={i}>
                      {author}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.form.text,
  foo: state.form.foo
});

export default connect(mapStateToProps)(Authors);
