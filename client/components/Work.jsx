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
                 <div className ='underline'>He Pokai Manu</div>Final Group Project
                </a></div>

              <div className="workColumn"><a href={"https://jillglass.github.io/calculator/"} target="new">
              <div className ='underline'>Calculator</div>EDA Foundations Exercise
                </a></div>

              <div className="workColumn"><a href={"https://jillglass.github.io/minesweeper/"} target="new">
              <div className ='underline'>Minesweeper</div>EDA Foundations Exercise
                </a></div>

              <div className="workColumn"><a href={"https://github.com/jillGlass"} target="new">
              <div className ='underline'>Food List</div>Multi-Day Group Project
                </a></div>

              <div className="workColumn"><a href={"https://github.com/jillGlass"} target="new">
              <div className ='underline'>The Nerd Zealand Herald</div>Friday Group Project
                </a></div>
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default Work;
