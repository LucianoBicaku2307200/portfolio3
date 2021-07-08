import React from "react";
import "./footer.scss";
import { Email, Github, LinkedIn, Pinterest } from "../Social-Icons";
const Footer = () => {
  return (
    <footer>
      <div className="header">
        <div className="logo">
          Luciano Bicaku <span>./</span>
        </div>
        <div>
          <a href={"mailto:luciano.bicaku2307@gmail.com"}>
            <Email />
          </a>
          <a href="https://github.com/LucianoBicaku2307200" target="blank">
            <Github />
          </a>
          <a
            href="https://al.linkedin.com/in/luciano-bicaku-0403871a0"
            target="blank"
          >
            <LinkedIn />
          </a>
          <a href="https://www.pinterest.com/lucianobicaku/" target="blank">
            <Pinterest />
          </a>
        </div>
      </div>
      <div className="content">
        <p>
          Mirum est notare quam littera gothica, quam nunc putamus parum claram,
          anteposuerit litterarum formas{" "}
        </p>
        <div className="extra-info">
          <div>
            <h3>My phone number</h3>
            <div>+355 6880 30642</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
