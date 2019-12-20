import React from "react";
import { Link, HashRouter as Router } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="container">
            <div className="column-1">
              <Link to="/blog">
                <div className="title">Blog</div>
                <p className="intro">Technical and learning reflections</p>
                <div className="image">
                  <img
                    src="images/blogfancy.svg"
                    alt="blog icon"
                    height="140"
                  />
                </div>
              </Link>
            </div>
            <div className="column-2">
             <Link to="/work">
              <div className="title">Work</div>
                <p className="intro">Examples of projects and tinkerings</p>
                  <div className="image">
                    <img
                      src="images/workfancy.svg"
                      alt="blog icon"
                      height="140"
                    />
                 </div>
             </Link>
            </div>
            <div className="column-3">
              <Link to="/about">
                <div className="title">About</div>
                <p className="intro">Contact details and a little about me</p>
                  <div className="image">
                    <img
                      src="images/aboutfancy.svg"
                      alt="blog icon"
                      height="140"
                    />
                  </div>
              </Link>
            </div>
            </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default Main

