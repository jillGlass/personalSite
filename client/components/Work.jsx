import React from "react";
import NavInner from "./NavInner";
import Footer from "./Footer";
import WorkBoxWheko from './WorkBoxWheko'
import WorkBoxHouseHolder from "./WorkBoxHouseHolder";
import WorkBoxCalculator from "./WorkBoxCalculator";
import WorkBoxManu from "./WorkBoxManu";
import WorkBoxPersonal from "./WorkBoxPersonal";

class Work extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {
    return (
      <div>
         <NavInner />
        <div className="container-work-about work-background">
          <header className="title-about-page">
            <img src="../images/workfancy.svg" alt="work icon" height="130" />
          </header>
          
          </div>
          <div className='work-row-green-strip'></div>
          <WorkBoxWheko />
          <WorkBoxPersonal />
          <WorkBoxHouseHolder />
          <WorkBoxManu />
          <WorkBoxCalculator />
          

        
        <Footer />
      </div>
    );
  }
}

export default Work;

{/* 

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
            </div> */}