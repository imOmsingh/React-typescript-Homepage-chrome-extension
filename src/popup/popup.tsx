import * as React from "react";
import ReactDom from "react-dom";
import "./popup.css";

const App: React.FC<{}> = () => {
  return (
    <div>
      <img src="icon.png" />
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDom.render(<App />, root);
