import React from "react";
import { Link, HashRouter as Router } from "react-router-dom";

const AboutMeBox = () => {
  return (
    <div>
      <div className="stack-container">
        <div className="aboutBox-column-1">
          <div className="about-title">Story Time...</div>
          <div className="about-copy">
            <section className='section-padding'>
              After a career break (8 years in marketing) I dove in to
              programming, particularly front-end development, where I find I
              have transferrable skills that complement my new technical
              capability. My first step was joining Girl Code to gain some
              insight and basic experience.
            </section>
            <section className='section-padding'>
              {" "}
              After Girl Code levels 1 and 2 I enrolled in Enspiral Dev Academy.
              My cohort and teachers described me as having high standards for
              myself and others, and an excellent planner - I planned out each
              of the projects we worked on, which is where my organisational
              skills came to be an asset. They stated that while I worked hard I
              had a great sense of humour. I also made sure we had an inclusive
              environment for all to enjoy.{" "}
            </section>
            <section className='section-padding'>
              I am a highly focused, organised and collaborative team member who
              values and fosters a great team culture and who enjoys a fun and
              hardworking team environment. I enjoy learning from others and I
              have a curious nature. Having worked both agency and client side
              in marketing roles I understand the common challenges of
              publishing great digital product and managing expectations both
              informally and in structured processes.{" "}
            </section>
            <section className='section-padding'>
              While I'm not coding I love to get away in our caravan, snowboard
              and read way too much news online.
            </section>
          </div>
        </div>
        <div className="AboutBox-column-2">
          <div className="title">Tech Stack</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeBox;

/* 
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
        */
