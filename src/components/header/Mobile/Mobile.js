import React from "react";
import "./Mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#skills">
            <i className="fi-rr-laptop option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <i className="fi-rr-briefcase option-icon"></i>Experience
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i className="fi-rr-user option-icon"></i>Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
