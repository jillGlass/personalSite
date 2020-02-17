import React from "react";
import NavInner from "./NavInner";
import Footer from './Footer'
import AboutMeBox from './AboutMeBox'

class About extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {
    return (
      <div>
        <NavInner />
        <div className="container-work-about about-background">
          <header className="title-about-page">
            <img src="../images/aboutfancy.svg" alt="about icon" height="130" />
          </header>
          
          </div>
          <div className='about-row-green-strip'></div>
          <AboutMeBox />
        
        <Footer />
      </div>
      
    );
  }
}

export default About;
