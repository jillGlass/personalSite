import React from "react";
import Nav from './Nav'

class Work extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container-blog work-background">
          <header className="title">
            <img src="../images/workfancy.svg" alt="blog icon" height="130" />
          </header>
          <section className="standard-entry">
            <div className="blog-image"></div>
            <h3 className="blog-title soft-skills">Under Construction</h3>
          </section>
        </div>
      </div>
    );
  }
}

export default Work;
