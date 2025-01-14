import React, { useEffect, useState } from "react";
import "./projects.css";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch("https://api.github.com/orgs/ObieSource/repos")
      ).json();

      // set state when the data received
      setProjects(data);
    };

    dataFetch();
  }, []);

  if (!projects) return <div>Loading...</div>;

  return (
    <div className="obs__projects">
      <div className="obs__projects-container">
        {projects.map((project) => (
          <div className="obs__projects-project" key={project}>
            <div className="obs__projects-project-heading">
              <div className="obs__projects-project-heading-title">
                <a href={project.html_url}>{project.name}</a>
              </div>
              <div className="obs__projects-project-heading-status">
                {project.license?.spdx_id}
              </div>
            </div>
            <div className="obs__projects-project-heading-description">
              {project.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
