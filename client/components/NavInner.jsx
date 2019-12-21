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
              <Link to='/' className="burger">Home</Link>
            </li>
            <li>
              <Link to='/about' className="burger">About</Link>
            </li>
            <li>
              <Link to='/work' className="burger">Work</Link>
            </li>
            <li>
              <Link to='/blog' className="burger">Blog</Link>
            </li>
            </Router>
          </div>
        </ul>
      </div>
    );
  }
}

export default Nav;
