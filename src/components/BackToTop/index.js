import React from "react";
import NextIcon from "../../images/next.svg";
import "./style.scss";
const BackToTop = () => {
  return (
    <button className="backToTop">
      <img src={NextIcon} alt="" />
    </button>
  );
};

export default BackToTop;
