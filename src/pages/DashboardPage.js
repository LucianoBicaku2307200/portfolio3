import React, { useState } from "react";
import { DashboardProjects, DashboardSkills } from "../components";
import SearchIcon from "../images/icons8-search.svg";
const DashboardPage = () => {
  const [search, setsearch] = useState("");
  return (
    <div className="dashboard">
      <h1>DashboardPage</h1>
      <div className="input">
        <input
          value={search}
          onChange={(event) => setsearch(event.target.value)}
        />

        <img src={SearchIcon} alt="" onClick={() => console.log(search)} />
      </div>

      <DashboardProjects />
      <DashboardSkills />
    </div>
  );
};

export default DashboardPage;
