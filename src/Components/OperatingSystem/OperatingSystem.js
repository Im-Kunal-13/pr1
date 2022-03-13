import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import colors from "../../Utils/colors";

export default function OperatingSystem({ chartdata }) {
  return (
    <div
      className="analytics-section d-flex justify-content-center py-4"
      style={{ width: "100%" }}
    >
      <i className="bi bi-three-dots-vertical info-card-menuBtn"></i>

      <div
        class="card"
        style={{ border: "0", width: "20rem", paddingLeft: "26px" }}
      >
        <div class="card-body p-0">
          <h5
            class="card-title text-start pb-4 fs-3 text-center d-flex align-items-center"
            style={{ color: colors.infoCardTxt, fontWeight: "600" }}
          >
            Operating Systems
          </h5>
          <div className="donutCell">
            <div className="donutDiv">
              <Doughnut
                data={chartdata}
                options={{
                  cutout: 110,
                  scales: {
                    y: {
                      grid: {
                        borderWidth: 0,
                        display: false,
                      },
                      beginAtZero: false,
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                      position: "bottom",
                      align: "center",
                      labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                      },
                    },
                  },
                }}
              />
            </div>
            <div className="centerLabel">
              <p className="first-center-element">58%</p>
              <span className="second-center-element">26352 devices</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between ps-4 pe-5">
          <div className="d-flex align-items-center">
            <span
              className="pe-2"
              style={{ fontSize: "40px", color: "#5473E8" }}
            >
              •
            </span>
            iOS
          </div>
          <div className="d-flex align-items-center">
            <span
              className="pe-2"
              style={{ fontSize: "40px", color: "#27ADB9" }}
            >
              •
            </span>
            Android
          </div>
        </div>
      </div>
    </div>
  );
}
