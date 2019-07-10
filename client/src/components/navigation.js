import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ children }) => (
  <nav>
    <ul className="navList">
      <li>
        <NavLink activeClassName="is-active" exact={true} to="/">
          Songs
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" to="/authors">
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" to="/history">
          History
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
