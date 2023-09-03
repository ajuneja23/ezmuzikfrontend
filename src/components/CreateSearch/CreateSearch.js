/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateSearch.css";
import axios from "axios";

function PreviousSearches(props) {
  if (props.prevqueries.length == 0) {
    return <h3>No previous queries.</h3>;
  }
  return (
    <div className="previousSearches">
      {props.prevqueries.map((query) => {
        return <h3>query</h3>;
      })}
    </div>
  );
}

function CreateSearch() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [userID, setuserID] = useState("");
  const [queries, setQueries] = useState([]);
  const [newQuery, setNewQuery] = useState("");
  const handleSubmit = () => {
    localStorage.setItem("query", newQuery);
    navigate("/queryinfo");
  };
  const getOldQueries = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/query", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    setToken(localStorage.getItem("token"));
    setuserID(localStorage.getItem("userID"));
    const oldQueries = getOldQueries();
    console.log(oldQueries);
  }, []);
  return (
    <div className="CreateSearch">
      <div className="header">
        <h3>EZMuzik</h3>
      </div>
      <div className="signedinas">
        <h3>Signed in as {username}</h3>
      </div>
      <div className="makequery">
        <input
          className="queryinput"
          placeholder="What's your song?"
          onChange={(e) => {
            setNewQuery(e.target.value);
          }}
        />
      </div>
      <div className="go">
        <button className="submitquery" onClick={handleSubmit}>
          Submit query
        </button>
      </div>
      <div className="prevqueries">
        <PreviousSearches prevqueries={queries} />
      </div>
    </div>
  );
}

export default CreateSearch;
