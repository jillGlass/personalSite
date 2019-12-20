import React from "react"
import { Link, HashRouter as Router } from "react-router-dom"

class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul className="navigation">
          <div className="nav-right">
              <Router>
            <li>
              <Link to='/about' className="burger">
                Jill Glass<br></br>Frontend Developer
              </Link>
            </li>
            </Router>
          </div>
        </ul>
      </div>
    );
  }
}

export default Nav;
