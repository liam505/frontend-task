import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import data from "./data.json";
import "./index.css";

ReactDOM.render(<App data={data} />, document.getElementById("root"));
