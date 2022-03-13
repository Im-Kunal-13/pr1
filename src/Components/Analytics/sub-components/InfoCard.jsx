import React from "react";
import colors from "../../../Utils/colors";

export default function InfoCard(props) {
  return (
    <div className="card info-card" style={{ border: "0" }}>
      <div className="text-center card-body">
        <h5 className="card-title info-card-title">
          <span>{props.cardData.title}</span>
          <i className="bi bi-three-dots-vertical info-card-menuBtn"></i>
        </h5>
        <p className="card-text info-card-txt">{props.cardData.txt}</p>
        <div
          className="card-percentage d-flex align-items-center justify-content-center"
          style={{
            color: `${
              props.cardData.percentage.includes("+") ? "cyan" : "red"
            }`,
            fontWeight: "bold",
          }}
        >
          {/* <i className="bi bi-arrow-up-right-circle pe-2"></i> */}
          <span className="txt-percentage pe-2">
            {props.cardData.percentage}
          </span>
          <span className="info-card-extra-txt">vs last week</span>
        </div>
      </div>
    </div>
  );
}
