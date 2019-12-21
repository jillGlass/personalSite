import React from "react";
import NavInner from "./NavInner";

class About extends React.Component {
  render() {
    return (
      <div>
        <NavInner />
        <div className="container-blog about-background">
          <header className="title">
            <img src="../images/aboutfancy.svg" alt="blog icon" height="130" />
          </header>
          <h3 className="blog-entry-title">
            Jill Glass, Fontend Web Developer
          </h3>
          <p className="blog-entry-container">
            <strong>Contact Me</strong> glass.nz@gmail.com
            <br />
            <br />
            <strong>Github</strong> https://github.com/jillGlass
            <br />
            <br />
            <strong>LinkedIn</strong> https://www.linkedin.com/in/jillglass/
            <br />
            <br />
            <p>
              <strong>Tech-Stack:</strong> React JS, Redux, Semantic UI, CSS,
              JavaScript, HTML, Adobe XD, Postman, Excel, Dotmailer, Google
              Analytics, SuperAgent, Testing Suite includes Jest, Enzyme, Nock,
              SuperTest and Cheerio
            </p>
            <p>
              <strong>Attributes:</strong> Disciplined, inquisitive,
              team-focused, hardworking, respectful, open, organised,
              understanding, accommodating and social
            </p>
            <p>
              In 2018, with over seven years of marketing experience under my
              belt, I decided - after taking a break to raise my children - to
              redirect my career. The first step towards this was to enrol with
              Girl Code to gain some insight and experience into the dev world
              and solidify the direction I wanted to take myself. After Girl
              Code levels 1 and 2 I enrolled in Enspiral Dev Academy, taking my
              career full-circle: at 18 I studied Multimedia at SEO in Auckland.
              20 years later I am back on that track and am very excited about
              the future.
            </p>
            <p>
              I am a highly focused, organised and collaborative team member who
              values and fosters a great team culture and who enjoys a fun and
              hardworking team environment. I enjoy learning from others and
              have a curious nature; with my background in marketing, having
              worked both agency and client side, I understand the necessity of
              great UX/UI design.
            </p>
            <p>
              I also have experience in managing internal stakeholders and
              clients as well as external clients, building strong, ongoing
              relationships. I have built web apps using React (including Redux)
              and Github and have an interest in mobile development - a personal
              project of mine which I designed and wireframed is now getting off
              the ground in React Native.
            </p>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
