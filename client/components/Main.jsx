import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <section className="column-1">
            <a href="blog/blog.html">
              {" "}
              <header className="title">Blog</header>
            </a>
            <a href="blog/blog.html">
              <p className="intro">Technical and learning reflections</p>
            </a>
            <div className="image">
              <a href="blog/blog.html">
                <img src="images/blogfancy.svg" alt="blog icon" height="140" />
              </a>
            </div>
          </section>
          <section className="column-2">
            <a href="Work/work.html">
              {" "}
              <header className="title">Work</header>
            </a>
            <a href="Work/work.html">
              <p className="intro">Examples of projects and tinkerings</p>
            </a>
            <div className="image">
              <a href="Work/work.html">
                <img src="images/workfancy.svg" alt="blog icon" height="140" />
              </a>
            </div>
          </section>
          <section className="column-3">
            <a href="About/about.html">
              {" "}
              <header className="title">About</header>
            </a>
            <a href="About/about.html">
              <p className="intro">Contact details and a little about me</p>
            </a>
            <div className="image">
              <a href="About/about.html">
                <img src="images/aboutfancy.svg" alt="blog icon" height="140" />
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
