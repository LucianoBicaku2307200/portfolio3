import { gsap, TweenMax } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../../images/close.svg";
import MenuIcon from "../../images/menu.svg";
import { Email, Github, LinkedIn, Pinterest } from "../Social-Icons";
import "./header.scss";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const scroll = (id) => {
    TweenMax.to(window, 1, { scrollTo: id });
  };
  return (
    <header id="header">
      <div className="menu">
        <div className="logo">
          <Link to="/">
            Luciano Bicaku <span>./</span>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <button onClick={() => scroll("#skills")}>Skills</button>
            </li>
            <li>
              <button onClick={() => scroll("#about")}>About</button>
            </li>
            <li>
              <button onClick={() => scroll("#project")}>Projects</button>
            </li>
            <li>
              <button onClick={() => scroll("#contact")}>Contacts</button>
            </li>
          </ul>
        </nav>
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

      <div className="menu-mobile">
        <div className="menu-header">
          <div className="logo">
            Luciano Bicaku <span>./</span>
          </div>
          <div onClick={handleToggle} style={{ cursor: "pointer" }}>
            <img src={toggle ? CloseIcon : MenuIcon} alt="" />
          </div>
        </div>

        <div className={`menu-content ${toggle ? "show" : "hide"}`}>
          <div className="links">
            <ul>
              <li>
                <button onClick={() => scroll("#skills")}>Skills</button>
              </li>
              <li>
                <button onClick={() => scroll("#about")}>About</button>
              </li>
              <li>
                <button onClick={() => scroll("#project")}>Projects</button>
              </li>
              <li>
                <button onClick={() => scroll("#contact")}>Contacts</button>
              </li>
            </ul>
          </div>
          <div className="social-links">
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
      </div>
    </header>
  );
};

export default Header;
