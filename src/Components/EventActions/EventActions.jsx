import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import colors from "../../Utils/colors";

export default function EventActions({ chartdata }) {
  return (
    <div
      id="event-actions"
      className="analytics-section d-flex flex-column align-items-center justify-content-center py-4"
      style={{ width: "100%" }}
    >
      <div
        className="card"
        style={{ border: "0", width: "20rem", paddingRight: "10px" }}
      >
        <div className="card-body p-0">
            <i
              className="bi bi-three-dots-vertical"
              style={{ color: colors.infoCardMenuBtn, fontSize: "18px", position: "absolute", right: "0%", marginTop: "6px"}}
            ></i>
          <h5
            className="card-title text-start pb-4 fs-3 text-center d-flex align-items-center justify-content-center"
            style={{ color: colors.infoCardTxt, fontWeight: "600" }}
          >
            Event Actions
          </h5>
          <Pie
            data={chartdata}
            options={{
              scales: {
                y: {
                  grid: {
                    borderWidth: 0,
                    display: false,
                  },
                  beginAtZero: true,
                  ticks: {
                    display: false,
                    callback: function (value) {
                      const valueLegend = this.getLabelForValue(value);

                      const valueLegendRep = valueLegend.replaceAll(",", "");

                      // if (valueLegendRep.length === 0) {
                      // }
                      // const valueLegendTrunc = valueLegendRep.substr(0, 3);

                      return valueLegendRep + "K";
                    },
                  },
                },
              },
              plugins: {
                legend: {
                  display: false,
                  position: "bottom",
                  align: "end",
                  labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-around ps-5 pe-5">
        <div className="d-flex align-items-center pe-3">
          <span className="pe-2" style={{ fontSize: "40px", color: "#5473E8" }}>
            •
          </span>
          Search
        </div>
        <div className="d-flex align-items-center pe-3">
          <span className="pe-2" style={{ fontSize: "40px", color: "#27ADB9" }}>
            •
          </span>
          Activate
        </div>
        <div className="d-flex align-items-center pe-3">
          <span className="pe-2" style={{ fontSize: "40px", color: "#5473E8" }}>
            •
          </span>
          Scan
        </div>
        <div className="d-flex align-items-center pe-3">
          <span className="pe-2" style={{ fontSize: "40px", color: colors.compatibilityBarViolet }}>
            •
          </span>
          Payment
        </div>
      </div>
    </div>
  );
}
