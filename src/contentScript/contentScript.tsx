import * as React from "react";
import ReactDOM from "react-dom";
import "./contentScript.css";

const App = () => {
  return <div className="backGround">contentScripter</div>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
