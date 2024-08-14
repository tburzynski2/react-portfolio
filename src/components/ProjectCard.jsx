import React from "react";

const ProjectCard = ({ id, title, techStack, link, isMain }) => {
  return (
    <a
      id={id}
      className={`card ${isMain ? "border-primary" : ""} mb-4`}
      href={link}
      target="_blank"
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{techStack}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
