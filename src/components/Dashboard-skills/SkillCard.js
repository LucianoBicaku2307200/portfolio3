import React, { useState } from "react";

import { Api } from "../../api/BaseEndpoint";
import "./style.scss";
import FileBase from "react-file-base64";
const SkillCard = ({ data, deleteProject }) => {
  const [skill, setskill] = useState(data);
  const handleDelete = async (id) => {
    deleteProject(id);
    await Api.delete(`/skills/${id}`, {
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
    await Api.patch(`/skills/${id}`, skill, {
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
    <div className="skills-item">
      <div className="img-container">
        <img src={data.image} alt="" />
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setskill({ ...data, image: base64 })}
        />
      </div>

      <input
        type="text"
        value={skill.title}
        onChange={(event) => {
          setskill({ ...skill, title: event.target.value });
        }}
      />
      <textarea
        type="text"
        value={skill.description}
        onChange={(event) => {
          setskill({ ...skill, description: event.target.value });
        }}
      />
      <div className="buttons">
        <button onClick={() => handleUpdate(data._id)}>Save</button>
        <button className="delete" onClick={() => handleDelete(data._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
