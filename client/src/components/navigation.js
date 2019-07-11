import React from "react";
import { NavLink } from "react-router-dom";

import { faHome, faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navigation = ({ children }) => (
  <nav className="stickyNav">
    <NavLink
      to="/"
      style={{ textDecoration: "none", color: "white" }}
      activeClassName="is-active"
      className="navButtons"
      exact
    >
      <button>
        <FontAwesomeIcon icon={faHome} />
      </button>
    </NavLink>

    <NavLink
      to="/history"
      style={{ textDecoration: "none", color: "white" }}
      activeClassName="is-active"
      className="navButtons"
      exact
    >

      <button>
        <FontAwesomeIcon icon={faHistory} />
      </button>
    </NavLink>
  </nav>
);

export default Navigation;
