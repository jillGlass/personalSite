import React from "react";
import { Link, HashRouter as Router } from "react-router-dom";

class Main extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="top-row">
            <div className="center-name">Jill Glass</div>
            <div className="center-name-secondary">FRONTEND DEVELOPER</div>
            <div className="center-name-copy">
              {" "}
              Seeking a junior role within an established team.
            </div>
          </div>
          <div className="container">
            <div className='column-left'></div>
            <Link to="/work">
              <div className="column-1">
                <div className="title">Work</div>
                <p className="intro">Examples of projects and tinkerings</p>
                <div className="image">
                  <img
                    src="images/workfancy.svg"
                    alt="work icon"
                    height="120"
                  />
                </div>
              </div>
            </Link>
            <Link to="/about">
              <div className="column-2">
                <div className="title">About</div>
                <p className="intro">Contact details and a little about me</p>
                <div className="image">
                  <img
                    src="images/aboutfancy.svg"
                    alt="about icon"
                    height="120"
                  />
                </div>
              </div>
            </Link>
            <div className='column-right'></div>
          </div>
          <div className="bottom-row">
            <div className="center-name-copy">glass.nz@gmail.com</div>
            <div className="center-name-secondary icon-padding">
              <a href='https://www.linkedin.com/in/jillglass/'> <img src="images/icons8-linkedin-circled-48.png" height="37" /> </a>
              <a href='https://github.com/jillGlass'><img src="images/icons8-github-48.png" height="37" /> </a>
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;
