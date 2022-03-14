import React from "react";

export default function System(props) {
  return (
    <div style={{ paddingBottom: "12%" }}>
      <div className="d-flex justify-content-between info-card-title pb-2">
        <span>
          <i className={`bi ${props.data.iconClass} pe-3`}></i>
          {props.data.systemName}
        </span>
        <span>{props.data.compatiblePercentage}%</span>
      </div>
      <div className="progress" style={{ borderRadius: "10px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${props.data.compatiblePercentage}%`,
            backgroundColor: props.data.barColor,
          }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}
