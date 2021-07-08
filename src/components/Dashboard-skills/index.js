import React, { useEffect, useState } from "react";
import "./style.scss";
import SkillCard from "./SkillCard";
import img from "../../images/testImage.png";
import { Api } from "../../api/BaseEndpoint";
import FileBase from "react-file-base64";
const DashboardSkills = () => {
  const [data, setData] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const deleteProject = (id) => {
    setData((data) => data.filter((item) => item._id !== id));
  };
  const handleAddProject = async () => {
    await Api.post("/skills", newSkill, {
      headers: {
        Authorization: `${localStorage.getItem("portfolio-admin-token")}`,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setData([...data, newSkill]);
  };
  useEffect(() => {
    async function fetchData() {
      await Api.get("/skills")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);
  return (
    <div className="dashboard-skills">
      <h3>Skills</h3>
      <div className="skills">
        <div className="skills-item">
          <div className="img-container">
            <img src={img} alt="" />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setNewSkill({ ...newSkill, image: base64 })
              }
            />
          </div>

          <input
            type="text"
            value={newSkill.title || ""}
            onChange={(event) => {
              setNewSkill({ ...newSkill, title: event.target.value });
            }}
          />
          <textarea
            type="text"
            value={newSkill.description || ""}
            onChange={(event) => {
              setNewSkill({ ...newSkill, description: event.target.value });
            }}
          />
          <div className="buttons">
            <button onClick={handleAddProject}>Add</button>
          </div>
        </div>
        {data.map((el) => (
          <SkillCard data={el} key={el._id} deleteProject={deleteProject} />
        ))}
      </div>
    </div>
  );
};

export default DashboardSkills;
