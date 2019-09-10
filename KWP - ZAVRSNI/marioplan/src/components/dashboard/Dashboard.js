import React, { Component } from "react";
import GigList from "../gigs/GigList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Card, CardDeck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEuroSign,
  faSortAmountUp,
  faBalanceScale
} from "@fortawesome/free-solid-svg-icons";
class Dashboard extends Component {
  render() {
    const { gigs, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className=" container ">
        <CardDeck className="my-5">
          <Card className="text-center bg-success  border-success">
            <Card.Header>
              <FontAwesomeIcon icon={faEuroSign}></FontAwesomeIcon>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {gigs &&
                  gigs.reduce(function(acc, obj) {
                    return acc + obj.profit;
                  }, 0)}{" "}
                KN
              </Card.Title>
            </Card.Body>
          </Card>

          <Card bg="warning" text="white" className="text-center">
            <Card.Header>
              <FontAwesomeIcon icon={faBalanceScale}></FontAwesomeIcon>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {gigs &&
                  Math.round(
                    gigs.reduce(function(acc, obj) {
                      return acc + obj.profit;
                    }, 0) / Math.max(1, gigs.length)
                  )}{" "}
                KN
              </Card.Title>
            </Card.Body>
          </Card>

          <Card bg="danger" text="white" className="text-center">
            <Card.Header>
              <FontAwesomeIcon icon={faSortAmountUp}></FontAwesomeIcon>
            </Card.Header>
            <Card.Body>
              <Card.Title>{gigs && gigs.length}</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>

        <br></br>
        <div>
          <GigList  />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gigs: state.firestore.ordered.gigs,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Dashboard);
