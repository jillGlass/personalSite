import React from "react";
import NavInner from "./NavInner";
import Footer from './Footer'

class About extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {
    return (
      <div>
        <NavInner />
        <div className="container-work-about about-background">
          <header className="title">
            <img src="../images/aboutfancy.svg" alt="about icon" height="130" />
          </header>
          <h3 className="entry-title">Jill Glass - Frontend Web Developer</h3>
          <div className="entry-container">
            <div>
              <strong>Contact Me</strong>
              <div>glass.nz@gmail.com</div>
            </div>
            <br></br>
            <div>
              <strong>Github</strong>
              <div className="underline">
                <a href={"https://github.com/jillGlass"} target="new">
                  https://github.com/jillGlass
                </a>
              </div>
            </div>
            <br></br>
            <div>
              <strong>LinkedIn</strong>
              <div className="underline">
                <a href={"https://www.linkedin.com/in/jillglass/"} target="new">
                  https://linkedin.com/in/jillglass/
                </a>
              </div>
            </div>
            <br></br>
            <div>
              <strong>Tech-Stack</strong>
              <div>
                React JS, Redux, Semantic UI, CSS, JavaScript, HTML, Adobe XD,
                Postman, Excel, Dotmailer, Google Analytics, SuperAgent, Testing
                Suite includes Jest, Enzyme, Nock, SuperTest and Cheerio
              </div>
            </div>
            <br></br>
            <div>
              <strong>Attributes</strong>
              <div>
                Disciplined, inquisitive, team-focused, hardworking, respectful,
                open, organised, understanding, accommodating and social
              </div>
            </div>
            <br></br>
            <strong>My Story</strong>
            <div>
              In 2018, with over seven years of marketing experience under my
              belt, I decided - after taking a break to raise my children - to
              redirect my career. The first step towards this was to enrol with
              Girl Code to gain some insight and experience into the dev world
              and solidify the direction I wanted to take. After Girl
              Code levels 1 and 2 I enrolled in Enspiral Dev Academy, taking my
              career full-circle: at 18 I studied Multimedia at SEO in Auckland.
              20 years later I am back on that track and am very excited about
              the future.
            </div>
            <br></br>
            <div>
              I am a highly focused, organised and collaborative team member who
              values and fosters a great team culture and who enjoys a fun and
              hardworking team environment. I enjoy learning from others and I 
              have a curious nature; with my background in marketing, having
              worked both agency and client side, I understand the necessity of
              great UX/UI design.
            </div>
            <br></br>
            <div>
              I also have experience in managing internal stakeholders and
              clients as well as external clients, building strong, ongoing
              relationships. I have built web apps using React (including Redux)
              and Github and have an interest in mobile development - a personal
              project of mine which I designed and wireframed is now getting off
              the ground in React Native.
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
      
    );
  }
}

export default About;
