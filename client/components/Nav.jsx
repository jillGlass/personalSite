import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul className="navigation">
          <div className="nav-right">
            <li>
              <a href="About/about.html" className="burger">
                Jill Glass<br></br>Frontend Developer
              </a>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default Nav;
