import React, { useEffect, useState } from "react";
import { fetchSheetData } from "../../utils/api";
import "./Announcements.css";
const Announcements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: any = await fetchSheetData();
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
