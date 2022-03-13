import React from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import colors from "../../Utils/colors";

export default function Demography({ chartdata }) {
  return (
    <div id="demography" className="card analytics-section px-3 pt-2" style={{ border: "0" }}>
      <div className="card-body">
        <i className="bi bi-three-dots-vertical info-card-menuBtn"></i>
        <h5
          className="card-title text-start pb-4 fs-3"
          style={{ color: colors.infoCardTxt, fontWeight: "600" }}
        >
          Demography
        </h5>
        <Scatter
          data={chartdata}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function (value) {
                    const valueLegend = this.getLabelForValue(value);

                    const valueLegendRep = valueLegend.replaceAll(",", "");

                    // if (valueLegendRep.length === 0) {
                    // }
                    // const valueLegendTrunc = valueLegendRep.substr(0, 3);

                    return valueLegendRep === "0" ? 0 : valueLegendRep + "K";
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
        <div className="d-flex justify-content-end ps-5 pe-5">
          <div className="d-flex align-items-center pe-4">
            <span
              className="pe-2"
              style={{ fontSize: "40px", color: "#5473E8" }}
            >
              •
            </span>
            MacOS
          </div>
          <div className="d-flex align-items-center">
            <span
              className="pe-2"
              style={{ fontSize: "40px", color: "#27ADB9" }}
            >
              •
            </span>
            Linux
          </div>
        </div>
      </div>
    </div>
  );
}
