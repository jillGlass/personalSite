import React from "react";
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
            He Pokai Manu
          </h3>
        </div>
      </div>
    );
  }
}

export default Work;
