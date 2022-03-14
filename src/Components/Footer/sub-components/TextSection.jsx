import React from "react";

export default function TextSection(props) {
  return (
    <div>
      <p className="footer-info-title">{props.data.title}</p>
      <p>{props.data.line1}</p>
      <p>{props.data.line2}</p>
      <p>{props.data.line3}</p>
    </div>
  );
}
