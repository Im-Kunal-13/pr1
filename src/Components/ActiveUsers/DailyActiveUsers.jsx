import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import colors from "../../Utils/colors";

export default function DailyActiveUsers({ chartdata }) {
  return (
    <div id="daily-active-users" className="card analytics-section px-3 pt-2 pb-3" style={{ border: "0" }}>
      <div className="card-body">
        <i className="bi bi-three-dots-vertical info-card-menuBtn"></i>
        <h5
          className="card-title text-start pb-4 fs-3"
          style={{ color: colors.infoCardTxt, fontWeight: "600" }}
        >
          Daily Active Users
        </h5>
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
      </div>
    </div>
  );
}
