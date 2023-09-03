/** @format */

import React from "react";
import "./Error.css";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="Error">
      <h1>Error has occurred</h1>
    </div>
  );
}

export default Error;
