import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
          <div className="skills-image-div">
            <img
              className="circular-image"
              alt="Neha Working"
              src={require("../../assets/images/woman.png")}
            />
          </div>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title}</h1>
            <p className="subTitle skills-text-subtitle">
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skill, index) => (
                <p key={index} className="subTitle skills-text">
                  {skill}
                </p>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}
