/** @format */

import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login");
  };
  const handleSignup = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/auth/signup", {
        username: username,
        password: password,
      });
      console.log(res.data);
      localStorage.setItem("token", res.data.user.token);
      localStorage.setItem("username", username);
      localStorage.setItem("userID", res.data.user.user_id);
      navigate("/search");
    } catch (err) {
      alert("Credentials already in use. Please try again.");
    }
  };
  return (
    <div className="Signup">
      <div className="header">
        <h3>EZMuzik</h3>
      </div>
      <div className="signupform">
        <h2>Signup</h2>
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
        <button className="submit" onClick={handleSignup}>
          Submit
        </button>
      </div>
      <div className="loginredirect">
        <h6>
          Already have an account? <a onClick={toLogin}>Log In</a>
        </h6>
      </div>
    </div>
  );
}

export default Signup;
