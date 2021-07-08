import React, { useState } from "react";
import Img from "../../images/testImage.png";
import { Api } from "../../api/BaseEndpoint";
import FileBase from "react-file-base64";
const ProjectCard = ({ project, deleteProject }) => {
  const [data, setdata] = useState(project);
  const handleDelete = async (id) => {
    deleteProject(id);
    await Api.delete(`/projects/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem("portfolio-admin-token")}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = async (id) => {
    await Api.patch(`/projects/${id}`, data, {
      headers: {
        Authorization: `${localStorage.getItem("portfolio-admin-token")}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="projects-item">
      <div>
        <div className="img-container">
          <img src={data.image} alt="" />
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setdata({ ...data, image: base64 })}
          />
        </div>
        <div>
          <input
            placeholder="title"
            className="title"
            value={data.title}
            onChange={(event) =>
              setdata({ ...data, title: event.target.value })
            }
          />
          <textarea
            placeholder="description"
            className="description"
            value={data.description}
            onChange={(event) =>
              setdata({ ...data, description: event.target.value })
            }
          />
          <input
            placeholder="git Repo Link"
            className="links"
            value={data.gitRepository}
            onChange={(event) =>
              setdata({ ...data, gitRepository: event.target.value })
            }
          />
          <input
            placeholder="Demo Url"
            className="links"
            value={data.demoURL}
            onChange={(event) =>
              setdata({ ...data, demoURL: event.target.value })
            }
          />
          <div className="buttons">
            <button onClick={() => handleUpdate(data._id)}>Save</button>
            <button className="delete" onClick={() => handleDelete(data._id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
