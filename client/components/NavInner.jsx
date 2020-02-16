import React from "react";
import { Link, NavLink, HashRouter as Router } from "react-router-dom";

class NavInner extends React.Component {
  render() {
    return (
      <div>
        <ul className="navigation">
          <div className="nav-right">
            <Router>
              <li>
                <NavLink
                  activeClassName="navbar__link--"
                  className="burger"
                  to="/">
                  Home
                </NavLink>
              </li>
              <li>
              <NavLink
                  activeClassName="navbar__link--active"
                  className="burger"
                  to="/about">
                  About Me
                </NavLink>
              </li>
              <li>
              <NavLink
                  activeClassName="navbar__link--active"
                  className="burger"
                  to="/work">
                  My Work
                </NavLink>
              </li>
            </Router>
          </div>
        </ul>
      </div>
    );
  }
}

export default NavInner;

