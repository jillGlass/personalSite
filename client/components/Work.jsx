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

              <div className="workColumn"><a href={"https://github.com/jillGlass/He-Pokai-Manu"} target="new">
                  He Pokai Manu<br></br>Final Group Project
                </a></div>

              <div className="workColumn"><a href={"https://jillglass.github.io/calculator/"} target="new">
                  Calculator<br></br>EDA Foundations Exercise
                </a></div>

              <div className="workColumn"><a href={"https://jillglass.github.io/minesweeper/"} target="new">
                  Minesweeper<br></br>EDA Foundations Exercise
                </a></div>

              <div className="workColumn"><a href={"https://github.com/jillGlass"} target="new">
                  Food List<br></br>Multi-Day Group Project
                </a></div>

              <div className="workColumn"><a href={"https://github.com/jillGlass"} target="new">
                  The Nerd Zealand Herald<br></br>Friday Group Project
                </a></div>
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default Work;
