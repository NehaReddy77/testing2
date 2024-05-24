// Education.js
import React from 'react';
import { education } from "../../portfolio"; // Importing education data
import './education.css'; // Importing CSS file for styling

const Education = () => {
  return (
    <div id= "education" className="education-container">
      <h1 className='education-heading'>Education</h1>
      {education.map((edu) => (
        <div className="education-card" key={edu.id}>
        <div className="institution-logo">
          <img src={edu.logo} className= 'logo-img' alt="Institution Logo"  />
        </div>
        <div className='details'>
          <h3>{edu.institution}</h3>
          <p>{edu.degree}</p>
          <p>{edu.year}</p>
          <p className='coursework'>{edu.courses}</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
