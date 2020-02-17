import React from "react";
import NavInner from "./NavInner";

class Work extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {
    return (
      <div>
        <NavInner />
        <div className="container-work-about work-background">
          <header className="title">
            <img src="../images/workfancy.svg" alt="work icon" height="130" />
          </header>
          <h3 className="entry-title">Work Examples and Links -- PAGE UNDER CONSTRUCTION...</h3>
          <div><strong>Personal Project:</strong> React and React Native projects that I have been creating in my spare time.</div>
          <div><strong>Final Project:</strong> Our team of 4 had 6 days to plan, create, test and deploy a web app of our choice.  We created He Pokai Manu, a bird spotting PWA for kids.</div>
          <div><strong>Friday Project:</strong> One-day projects that saw teams of 4 to 5 people plan, create and (hopefully!) test a site that covered what we had learnt that week, ranging from API's through to Redux.</div>
          <div><strong>EDA Exercise:</strong> A class exercise to test our knowledge of HTML, CSS and JavaScript.</div><br></br>
        
            <div className="workContainer">

            <div className="workColumn"><a href={"https://expo.io/@jillglass/HouseHolder"} target="new">
              <div className ='underline'>React Native App - HouseHolder</div>Personal Project
                </a></div>

              <div className="workColumn"><a href={"https://github.com/jillGlass/He-Pokai-Manu"} target="new">
                 <div className ='underline'>He Pokai Manu</div>Final Project
                </a></div>

              <div className="workColumn"><a href={"https://github.com/jillGlass/The-Nerd-Zealand-Herald"} target="new">
              <div className ='underline'>The Nerd Zealand Herald</div>Friday Project
                </a></div>

                <div className="workColumn"><a href={"https://github.com/jillGlass/wholesome"} target="new">
              <div className ='underline'>Never Have I Ever Game</div>Friday Project
                </a></div>

                <div className="workColumn"><a href={"https://github.com/jillGlass/EDAte"} target="new">
              <div className ='underline'>EDAte</div>Friday Project
                </a></div>

                <div className="workColumn"><a href={"https://jillglass.github.io/calculator/"} target="new">
              <div className ='underline'>Calculator</div>EDA Exercise
                </a></div>

              <div className="workColumn"><a href={"https://jillglass.github.io/minesweeper/"} target="new">
              <div className ='underline'>Minesweeper</div>EDA Exercise
                </a></div>
            </div>

            
        
        </div>
      </div>
    );
  }
}

export default Work;

