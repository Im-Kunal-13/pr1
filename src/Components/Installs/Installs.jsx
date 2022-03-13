import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import colors from "../../Utils/colors";

export default function Installs({ chartdata }) {
  return (
    <div className="card analytics-section px-3 pt-2" style={{ border: "0"}}>
      <div className="card-body">
        <h5 className="card-title text-start pb-4 fs-3 pe-1" style={{color: colors.infoCardTxt, fontWeight: "600"}}>Installs</h5>
        <Line
          data={chartdata}
          options={{
            tension: 0.4,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function (value) {
                    const valueLegend = this.getLabelForValue(value);
                    const valueLegendRep = valueLegend.replaceAll(",", "");

                    return valueLegendRep === "0"
                      ? valueLegendRep
                      : valueLegendRep + "K";
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
            Install
          </div>
          <div className="d-flex align-items-center">
            <span
              className="pe-2"
              style={{ fontSize: "40px", color: "#27ADB9" }}
            >
              •
            </span>
            Uninstall
          </div>
        </div>
      </div>
    </div>
  );
}
