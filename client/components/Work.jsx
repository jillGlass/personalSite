import React from "react";
import NavInner from "./NavInner";

class Work extends React.Component {
  render() {
    return (
      <div>
        <NavInner />
        <div className="container-blog work-background">
          <header className="title">
            <img src="../images/workfancy.svg" alt="work icon" height="130" />
          </header>
          <h3 className="blog-entry-title"></h3>
          <React.Fragment>
            <div className="workContainer">
              <div className="workColumn">
                <a href={"https://github.com/jillGlass"} target="new">
                  He Pokai Manu
                </a>
              </div>

              <div className="workColumn"><a href={"https://github.com/jillGlass"} target="new">
                  He Pokai Manu
                </a></div>

              <div className="workColumn"><a href={"https://github.com/jillGlass"} target="new">
                  He Pokai Manu
                </a></div>

              <div className="workColumn"><a href={"https://github.com/jillGlass"} target="new">
                  He Pokai Manu
                </a></div>

              <div className="workColumn"><a href={"https://github.com/jillGlass"} target="new">
                  He Pokai Manu
                </a></div>

              <div className="workColumn"><a href={"https://github.com/jillGlass"} target="new">
                  He Pokai Manu
                </a></div>
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default Work;
