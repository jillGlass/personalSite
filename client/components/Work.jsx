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
          <div><strong>Final Group Project:</strong> Our team of four had six days to plan, create, test and deploy a web app of our choice.  We created He Pokai Manu, a bird spotting PWA for kids.</div>
          <div><strong>Multi-Day Group Project:</strong> Our class of 14 worked in frontend, backend, devops and testing teams to create a site that informs you of a foods resource usage.</div>
          <div><strong>Friday Group Project:</strong> A one-day project that saw teams of 4 to 5 people plan, create and (hopefully!) test a site that covered what we had learnt that week, ranging from API's through to Redux.</div><br></br>
        
            <div className="workContainer">

              <div className="workColumn"><a href={"https://github.com/jillGlass/He-Pokai-Manu"} target="new">
                 <div className ='underline'>He Pokai Manu</div>Final Group Project
                </a></div>

              <div className="workColumn"><a href={"https://github.com/jillGlass"} target="new">
              <div className ='underline'>Food List</div>Multi-Day Group Project
                </a></div>

              <div className="workColumn"><a href={"https://github.com/jillGlass"} target="new">
              <div className ='underline'>The Nerd Zealand Herald</div>Friday Group Project
                </a></div>

                <div className="workColumn"><a href={"https://github.com/jillGlass"} target="new">
              <div className ='underline'>Never Have I Ever Game</div>Friday Group Project
                </a></div>

                <div className="workColumn"><a href={"https://github.com/jillGlass"} target="new">
              <div className ='underline'>eATda</div>Friday Group Project
                </a></div>

                <div className="workColumn"><a href={"https://jillglass.github.io/calculator/"} target="new">
              <div className ='underline'>Calculator</div>EDA Foundations Exercise
                </a></div>

              <div className="workColumn"><a href={"https://jillglass.github.io/minesweeper/"} target="new">
              <div className ='underline'>Minesweeper</div>EDA Foundations Exercise
                </a></div>
            </div>
        
        </div>
      </div>
    );
  }
}

export default Work;
