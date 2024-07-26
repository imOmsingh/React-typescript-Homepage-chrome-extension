import React, { useEffect, useState } from "react";
import "./Announcements.css";
const Announcements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "AIzaSyCmrNrDddp3X6MdkOw-1h9lKfokPXKNYiI";
      const sheetId = "1TLAqRHWlX_GIq9etxH8lTiIAe6i4flHFQWSSZ4Y4guc";
      const range = "Sheet1!B13:B22"; // Adjust the range as needed

      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

      try {
        const response: any = await fetch(url);
        const res = await response.json();
        console.log(res?.values);
        setData(res?.values);
      } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="boardBody">
      <div className="bigHeading">Announcements</div>
      <ul style={{ listStyleType: "Number" }}>
        {data &&
          data.map((item) => {
            return <li className="listItem">{item[0]}</li>;
          })}
      </ul>
    </div>
  );
};

export default Announcements;
