import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: "project-1",
    title: "HoliDB Movie Database",
    techStack: "Node, Express, Handlebars, Postgres, REST APIs",
    link: "https://holidb.onrender.com/",
    isMain: true,
  },
  {
    id: "project-2",
    title: "RadLibs",
    techStack: "HTML, CSS, JavaScript, LocalStorage, REST APIs",
    link: "https://mmhilbert.github.io/madlibs-project/",
  },
  {
    id: "project-3",
    title: "MVC Tech Blog",
    techStack: "Node, Express, Handlebars, Postgres, Authentication",
    link: "https://mvc-tech-blog-7sik.onrender.com",
  },
  {
    id: "project-4",
    title: "Kanban Board",
    techStack: "HTML, CSS, JavaScript, jQuery, LocalStorage",
    link: "https://tburzynski2.github.io/kanban-board/Develop/index.html",
  },
  {
    id: "project-5",
    title: "Weather Dashboard",
    techStack: "HTML, CSS, JavaScript, LocalStorage",
    link: "https://tburzynski2.github.io/weather-dashboard/Develop/index.html",
  },
];

const PortfolioPage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6 col-lg-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
