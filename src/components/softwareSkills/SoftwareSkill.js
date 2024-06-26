import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";
import { Icon } from '@iconify/react';

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                
                    <Icon icon={skills.classname} style={skills.style} />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
