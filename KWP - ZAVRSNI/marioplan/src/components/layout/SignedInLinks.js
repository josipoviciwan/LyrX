import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Nav, Navbar, NavItem } from "react-bootstrap";

const SignedInLinks = props => {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" variant="pills">
        <NavItem eventkey={1} href="/home">
          <Nav.Link as={NavLink} to="/home">
            Home
          </Nav.Link>
        </NavItem>

        <NavItem eventkey={1} href="/statistics">
          <Nav.Link as={NavLink} to="/statistics">
            Statistics
          </Nav.Link>
        </NavItem>

        <NavItem onClick={props.signOut} href="/signin">
          <Nav.Link as={NavLink} to="/signin">
            Log out
          </Nav.Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  );
};

const mapStateToProps = state => {
  return {
    gigs: state.firestore.ordered.gigs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(SignedInLinks);
