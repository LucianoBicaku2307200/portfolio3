import React from "react";
import MyImage from "../../images/about me.png";
import "./about.scss";
const About = () => {
  return (
    <section className="about" id="about" data-scroll data-scroll-speed="1">
      <div className="img">
        <div className="bg-color-1" />
        <div className="bg-color-2" />
        <img src={MyImage} alt="" />
      </div>
      <div className="content">
        <div>
          <h2>About Me</h2>
          <div>
            <p>
              I am a self-taught programmer and prefer to learn new things,
              challenge myself, and do interesting things that matter.
            </p>
            <p>
              My energy fuels me in the pursuit of many interests, hobbies,
              areas of study and coding skills. I’m a fast learner, able to pick
              up new skills and juggle different projects and roles with
              relative ease.
            </p>
            <p>
              I'm quietly confident, naturally curious, and a team player ready
              to help my team members.
            </p>
          </div>
          <div>
            <button>view My Cv</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
