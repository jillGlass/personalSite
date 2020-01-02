import React from "react";
import { Link, HashRouter as Router } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="container">
         
          <Link to="/work">
            <div className="column-1">
              <div className="title">Work</div>
              <p className="intro">Examples of projects and tinkerings</p>
              <div className="image">
                <img src="images/workfancy.svg" alt="blog icon" height="120" />
              </div>
            </div>
          </Link>
          <Link to="/about">
            <div className="column-2">
              <div className="title">About</div>
              <p className="intro">Contact details and a little about me</p>
              <div className="image">
                <img src="images/aboutfancy.svg" alt="blog icon" height="120" />
              </div>
            </div>
          </Link>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;
