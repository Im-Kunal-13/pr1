import { React, useState, useContext } from "react";
import Installs from "../Installs/Installs";
import InfoCard from "./sub-components/InfoCard";
import sidebarContext from "../Context/sidebarContext";
import { useEffect } from "react";
import { clear } from "@testing-library/user-event/dist/clear";

export default function Analytics() {
  // CARD BORDER STATES.
  // const [card1Border, setCard1Border] = useState("")
  // const [card2Border, setCard2Border] = useState("")
  // const [card3Border, setCard3Border] = useState("")
  // const [card4Border, setCard4Border] = useState("")

  // Sidebar Active State Context
  const a = useContext(sidebarContext);

  var infoCardData = [
    {
      title: "User",
      txt: "46 468",
      percentage: "+33,32%",
      //   border: card1Border
    },
    {
      title: "Sessions",
      txt: "98.3 K",
      percentage: "+18,77%",
      //   border: card2Border
    },
    {
      title: "Avg. Session",
      txt: "3m 9sec",
      percentage: "-5,77%",
      //   border: card3Border
    },
    {
      title: "Bounce Rate",
      txt: "45.72%",
      percentage: "-13,16%",
      borderEnd: false,
      //   border: card4Border
    },
  ];

  // Curve Line 2 Settings
  const [installLineChartData, setInstallLineChartData] = useState({
    labels: [
      "April 6",
      "April 7",
      "April 8",
      "April 9",
      "April 10",
      "April 11",
      "April 12",
    ],
    datasets: [
      {
        label: "Install",
        data: [5, 20, 10, 15, 5, 18, 15],
        borderColor: "#5473E8",
        borderWidth: 5,
      },
      {
        label: "Uninstall",
        data: [8, 2, 8, 6, 10, 8, 11],
        borderColor: "#27ADB9",
        borderWidth: 5,
      },
    ],
  });

  // Breakpoints
  const [infoBodyBreakpoint, setInfoBodyBreakpoint] = useState("col-12");
  const [infoCardBreakpoint, setInfoCardBreakpoint] = useState("col");

  window.addEventListener("load", () => {
    window.dispatchEvent(new Event("resize"));
  });

  window.addEventListener("resize", (event) => {
    if (window.innerWidth - a.extraDashboardSpace > 1050) {
      setInfoCardBreakpoint("col");
    } else if (
      window.innerWidth - a.extraDashboardSpace > 600 &&
      window.innerWidth - a.extraDashboardSpace <= 1050
    ) {
      setInfoCardBreakpoint("col-6");
    } else {
      setInfoCardBreakpoint("col-12");
    }
  });

  return (
    <div className="analytics-body">
      <div className="row">
        <div
          className={`${infoBodyBreakpoint} row info-body analytics-section`}
          style={{ backgroundColor: "#fff"}}
        >
          {infoCardData.map((data, index) => {
            return (
              <div className={`${infoCardBreakpoint}`} key={index + 1}>
                <InfoCard
                  cardData={data}
                />
              </div>
            );
          })}
        </div>
        <div className="col-8 p-0">
          <Installs chartdata={installLineChartData} />
        </div>
      </div>
    </div>
  );
}
