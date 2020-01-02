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
                <div><strong>Jill Glass</strong></div>
                <div className='italic'>Frontend Developer</div>
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
