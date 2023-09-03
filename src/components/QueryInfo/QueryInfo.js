/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QueryInfo.css";
import axios from "axios";
import LoudnessDataChart from "./LoudnessDataChart/LoudnessDataChart.js";

function QueryInfo() {
  const navigate = useNavigate();
  const [songName, setSongName] = useState("");
  const [songArtist, setSongArtist] = useState("");
  const [relatedArtists, setRelatedArtists] = useState([]);
  const [loudnessData, setLoudnessData] = useState([]);
  const [loudnessDataPoints, setLoudnessDataPoints] = useState(0);
  const getSongData = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/spotify/song_data",
        {
          query: localStorage.getItem("query"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setSongName(res.data.song_name);
      setSongArtist(res.data.song_artist);
      setRelatedArtists(res.data.related_artists);
      console.log(res.data.loudness_data);
      setLoudnessData(res.data.loudness_data);
      setLoudnessDataPoints(res.data.data_points);
    } catch (err) {
      alert("An error has occurred.");
    }
  };
  useEffect(() => {
    getSongData();
  }, []);
  return (
    <div className="QueryInfo">
      <div className="header">
        <h3>EZMuzik</h3>
      </div>
      <div className="info">
        <h1 className="songname">{songName}</h1>
        <h1 className="songartist">{songArtist}</h1>
        <div className="artistsloudness">
          <div className="relatedartistsleft">
            <h2>Related Artists</h2>
            {relatedArtists.slice(0, 10).map((artist) => {
              return <h1>{artist}</h1>;
            })}
          </div>
          <LoudnessDataChart data={loudnessData} />
          <div className="relatedartistsright">
            <h2>Related Artists</h2>
            {relatedArtists.slice(10, 20).map((artist) => {
              return <h1>{artist}</h1>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueryInfo;
