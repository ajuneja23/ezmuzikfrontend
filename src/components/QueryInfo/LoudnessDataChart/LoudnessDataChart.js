/** @format */

import React, { useState, useEffect } from "react";
import "./LoudnessDataChart.css";
import {
  ScatterChart,
  XAxis,
  YAxis,
  Line,
  Legend,
  CartesianGrid,
  Tooltip,
  Scatter,
} from "recharts";
function LoudnessDataChart(props) {
  const [desiredDataPoints, setDesiredDataPoints] = useState(0);
  return (
    <div className="LoudnessDataChart">
      <input
        type="number"
        placeholder="Amount of data"
        onChange={(e) => setDesiredDataPoints(e.target.value)}
        className="inputter"
      />
      <table className="data">
        <tr>
          <th className="time_row">Timestamp(s)</th>
          <th>Loudness (dB)</th>
        </tr>
        {props.data.slice(0, desiredDataPoints).map((datapoint) => {
          return (
            <tr>
              <th className="time_row">{datapoint[0].toFixed(1)}</th>
              <th>{(-1 * datapoint[1]).toFixed(1)}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default LoudnessDataChart;
