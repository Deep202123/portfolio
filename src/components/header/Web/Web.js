import React from "react";
import "./Web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#skills">
          <i className="fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i className="fi-rr-briefcase option-icon"></i>Experience
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i className="fi-rr-user option-icon"></i>Contact Me
        </a>
      </div>
    </div>
  );
}

export default Web;
