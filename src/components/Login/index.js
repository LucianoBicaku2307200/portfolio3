import React, { useState } from "react";
import "./login.scss";
import { Api } from "../../api/BaseEndpoint";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    Api.post("/user/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem(
          "portfolio-admin-token",
          `Bearer ${response.data.token}`
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => history.push("/admin-dashboard"));
  };

  return (
    <div className="login-form">
      <h1>Admin Login</h1>
      <input
        label="Username"
        name="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        label="Password"
        name="password"
        type="text"
        placeholder="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

export default Login;
