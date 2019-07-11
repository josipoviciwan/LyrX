import React from "react";
import { NavLink } from "react-router-dom";

import { faHistory, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navigation = () => (
  <nav className="stickyNav">
    <NavLink
      to="/"
      style={{ textDecoration: "none", color: "white" }}
      activeClassName="is-active"
      className="navButtons"
      exact
    >
      <button id="songs">
        <FontAwesomeIcon icon={faBars} />
        <br />
        Songs
      </button>
    </NavLink>

    <NavLink
      to="/history"
      style={{ textDecoration: "none", color: "white" }}
      activeClassName="is-active"
      className="navButtons"
      exact
    >
      <button id="history">
        <FontAwesomeIcon icon={faHistory} />
        <br />
        History
      </button>
    </NavLink>
  </nav>
);

export default Navigation;
