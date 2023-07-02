import React from "react";
import "./About.css";
import "../../common/SocialContact";
import SocialContact from "../../common/SocialContact";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Deep Kumar Mishra.</span>
          {/* <br /> a <span className="pro1">pro</span>grammer & a{" "}
          <span className="pro1">web</span> developer. */}
          <br/> <span>I am passionate about learning new technology with nice problem solving skills!</span>
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assests/me.jpeg").default}
            className="info-image"
            alt="Deep Kumar Mishra"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
