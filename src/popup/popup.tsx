import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import ReactDom from "react-dom";
import "./popup.css";
const App: React.FC<{}> = () => {
  return <div style={{ fontSize: 20 }}>Thankyou for using us.</div>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDom.render(<App />, root);
