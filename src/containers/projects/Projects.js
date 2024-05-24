import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Project.css";
import Button from "../../components/button/Button";
import Loading from "../loading/Loading";
import { socialMediaLinks } from "../../portfolio";
import { projects } from "../../portfolio";

export default function Projects() {
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getShortDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return description;
  };

  function setrepoFunction(array) {
    setrepo(array);
  }
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Projects</h1>
        
          <div className="portfolio">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.techstack}</p>
              <p>
                  {expandedDescriptions[project.id]
                    ? project.description
                    : getShortDescription(project.description)}
                  <span
                    className="read-more"
                    onClick={() => toggleDescription(project.id)}
                  >
                    {expandedDescriptions[project.id] ? " Read Less" : " Read More"}
                  </span>
                </p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
}
