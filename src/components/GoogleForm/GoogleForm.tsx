import React from "react";

const GoogleForm = () => {
  return (
    <div>
      <iframe
        style={{ border: "0px" }}
        src="https://docs.google.com/forms/d/e/1FAIpQLSe8dsfw6HoxKxQzMpZpiKi3OMKn1mMepzDlUmFdM5FY1StgDw/viewform?embedded=true"
        width="540px"
        height="340px"
        loading="lazy"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
