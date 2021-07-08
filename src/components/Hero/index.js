import { gsap, TweenMax } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import HeroImageLg from "../../images/heroImage.svg";
import HeroImageSm from "../../images/HeroimageSm.svg";
import "./hero.scss";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

const HeroSection = () => {
  const scroll = () => {
    TweenMax.to(window, 1, { scrollTo: "#contact" });
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Let’s work together</h1>
        <p>Full stack Web Developer</p>
        <button onClick={scroll}>
          Contact me <span></span>
        </button>
      </div>
      <img className="img img-lg" src={HeroImageLg} alt="" />
      <img className="img img-sm" src={HeroImageSm} alt="" />
    </section>
  );
};

export default HeroSection;
