import React from "react";
import colors from "../../Utils/colors";
import systemsData from "./Data";
import System from "./sub-components/System";

export default function Compatibility() {
  return (
      <div
      id="compatibility"
        className="analytics-section d-flex justify-content-center py-4"
        style={{ width: "100%" }}
      >
        <div
          className="card"
          style={{ border: "0", width: "70%"}}
        >
          <div className="card-body p-0">
            <h5
              className="card-title text-start pb-4 fs-3 text-center d-flex align-items-center justify-content-between"
              style={{ color: colors.infoCardTxt, fontWeight: "600" }}
            >
              Compatibility
              <i
                className="bi bi-three-dots-vertical"
                style={{ color: colors.infoCardMenuBtn, fontSize: "18px"}}
              ></i>
            </h5>
            {systemsData.map((system, index) => {
                return <System data={system} key={index} />
            })}
          </div>
        </div>
      </div>
  );
}
