import * as React from "react";
import ReactDOM from "react-dom";
import GoogleSlide from "../components/GoogleSlide/GoogleSlide";
import "./newtab.css";
import Pomodoro from "../components/Pomodoro/Pomodoro";
import GoogleForm from "../components/GoogleForm/GoogleForm";
import SpotifyMusic from "../components/SpotifyMusic/SpotifyMusic";
import GoogleSheets from "../components/GoogleSheets/GoogleSheets";
import GoogleCalendar from "../components/GoogleCalendar/GoogleCalendar";
import ChatBox from "../components/ChatBox/ChatBox";
import Announcements from "../components/Announcements/Announcements";
import DailyQuote from "../components/DailyQuote/DailyQuote";
import Todo from "../components/Todo/Todo";
const App = () => {
  return (
    <div className="backGround">
      <div className="leftPanel">
        <div
          className="HeadingBoldText"
          style={{ paddingLeft: "50px", marginBottom: "50px" }}
        >
          Daily Updates{" "}
        </div>
        <div className="elementContainer">
          <GoogleSlide
            showControls={true}
            slidesLink="https://docs.google.com/presentation/d/1V-f6qZxEIw0j53iTYChzwKV0cCfSfKsAyuPxD2R-Awg/edit#slide=id.p"
          />
          <div className="doubleContainer">
            <Announcements />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <DailyQuote />
              <Todo />
            </div>
          </div>
          <SpotifyMusic />
          <Pomodoro />
          <GoogleForm />
          <GoogleCalendar />
          <GoogleSheets />
        </div>
      </div>
      <div className="rightPanel">
        <div className="userSection">
          <img
            className="userImage"
            src="OM_SINGH.jpeg"
            style={{ borderRadius: "100px" }}
          />
          <div className="normalBoldText">Om singh</div>
          <div className="smallLightText">omsingh200310@gmail.com</div>
        </div>
        <ChatBox />
      </div>
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
