import React, { useEffect, useState } from "react";
import "./style.scss";
import ProjectCard from "./ProjectCard";
import AddProject from "./AddProject";
import { Api } from "../../api/BaseEndpoint";
const DashboardProjects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await Api.get("/projects")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  const deleteProject = (id) => {
    setData((data) => data.filter((item) => item._id !== id));
  };
  const handleAddProject = (newproject) => {
    setData([...data, newproject]);
  };

  return (
    <div className="dashboard-projects">
      <h3>Projects</h3>
      <div className="projects">
        <AddProject addProject={handleAddProject} />
        {data.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            deleteProject={deleteProject}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardProjects;
