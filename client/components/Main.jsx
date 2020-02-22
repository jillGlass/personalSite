import React from "react";
import { Link, HashRouter as Router } from "react-router-dom";
import Footer from '../components/Footer'

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
                <p className="intro">Linking to my tinkering</p>
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
                <p className="intro">More than just a phone number</p>
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

          <Footer />
          

        </Router>
      </React.Fragment>
    );
  }
}

export default Main;
