import React from "react";
import { HashRouter as Router, Link } from 'react-router-dom'
import NavInner from './NavInner'

class Work extends React.Component {
  render() {
    return (
      <div>
        <NavInner />
        <div className="container-blog work-background">
          <header className="title">
            <img src="../images/workfancy.svg" alt="work icon" height="130" />
          </header>
          <h3 className="blog-entry-title">
          </h3>
          <React.Fragment>
        <Router>
          <div className="workContainer">
          <Link to="/blog">
            <div className="workColumn-1">
              He Pokai Manu
            </div>
          </Link>
          <Link to="/work">
            <div className="workColumn-2">
              Calculator
            </div>
          </Link>
          <Link to="/about">
            <div className="workColumn-3">
              Food List
            </div>
          </Link>
          <Link to="/blog">
            <div className="workColumn-1">
              He Pokai Manu
            </div>
          </Link>
          <Link to="/work">
            <div className="workColumn-2">
              Calculator
            </div>
          </Link>
          <Link to="/about">
            <div className="workColumn-3">
              Food List
            </div>
          </Link>
          </div>
        </Router>
      </React.Fragment>
        </div>
      </div>
    );
  }
}

export default Work;
