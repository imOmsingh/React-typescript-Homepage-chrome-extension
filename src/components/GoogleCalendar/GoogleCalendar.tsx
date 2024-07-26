import React from "react";

const GoogleCalendar = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?height=480&wkst=1&ctz=UTC&bgcolor=%23ffffff&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043"
      style={{ borderRadius: "20px" }}
      width="540px"
      height="340px"
      scrolling="no"
      loading="lazy"
    ></iframe>
  );
};

export default GoogleCalendar;
