import React from "react";
import { Line } from "react-chartjs-2";
import {Chart} from "chart.js/auto"

export default function Installs({chartdata}) {
  return (
    <div>
      <div class="card" style={{ width: "" }}>
        <div class="card-body">
          <h5 class="card-title text-start pb-4 fs-3">Installs</h5>
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

                      // if (valueLegendRep.length === 0) {
                      // }
                      // const valueLegendTrunc = valueLegendRep.substr(0, 3);

                      return valueLegendRep === "0"
                        ? valueLegendRep
                        : valueLegendRep + "K";
                    },
                  },
                },
              },
              plugins: {
                legend: {
                  display: true,
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
    </div>
  );
}
