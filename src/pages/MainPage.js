import React from "react";
import {
  About,
  Contact,
  HeroSection,
  RecentProjects,
  Skills,
} from "../components";

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <RecentProjects />
      <About />
      <Skills />
      <Contact />
    </>
  );
};

export default MainPage;
