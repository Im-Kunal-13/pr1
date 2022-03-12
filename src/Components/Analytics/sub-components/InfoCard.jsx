import React from "react";
import colors from "../../../Utils/colors";

export default function InfoCard(props) {
  return (
    <div>
      <div className={`card info-card ${(props.cardData.borderEnd) ? "border-end" : ""}`} style={{border: "0"}}>
        <div className="card-body">
          <h5 className="card-title info-card-title">{props.cardData.title}</h5>
          <p className="card-text info-card-txt">
            {props.cardData.txt}
          </p>
          <div className="card-percentage d-flex align-items-center" style={{color: `${(props.cardData.percentage.includes("+")) ? "cyan" : "red"}`, fontWeight: "bold"}}>
          <i className="bi bi-arrow-up-right-circle pe-2"></i>
              <span className="txt-percentage pe-2">
                  {props.cardData.percentage}
              </span>
              <span className="info-card-extra-txt">
                  vs last week
              </span>
          </div>
        </div>
      </div>
    </div>
  );
}
