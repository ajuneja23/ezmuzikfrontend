/** @format */

import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const toSignup = () => {
    navigate("/signup");
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/auth/login", {
        username: username,
        password: password,
      });
      //console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", username);
      localStorage.setItem("userID", res.data.user.user_id);
      navigate("/search");
    } catch (err) {
      alert("Credentials invalid.");
    }
  };
  return (
    <div className="Login">
      <div className="header">
        <h3>EZMuzik</h3>
      </div>
      <div className="loginform">
        <h2>Login</h2>
        <div className="fields">
          <input
            placeholder="Username"
            className="field"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            placeholder="Password"
            className="field"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="submit" onClick={handleLogin}>
          Submit
        </button>
      </div>
      <div className="signupredirect">
        <h6>
          Need an account? <a onClick={toSignup}>Sign Up</a>
        </h6>
      </div>
    </div>
  );
}

export default Login;
