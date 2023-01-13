import userEvent from "@testing-library/user-event";
import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log("this is the prop of  projects",projects);
  const ProjectItems= projects.map(project=> <ProjectItem technologies= {project.technologies }name= {project.name}about= {project.about} key= {project.id} />)
  return ( 
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ProjectItems}</div>
    </div>
  );
}

export default ProjectList;
