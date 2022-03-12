import React from "react";
import { useState } from "react";
import Installs from "../Installs/Installs";
import InfoCard from "./sub-components/InfoCard";

export default function Analytics() {
// const [card1Border, setCard1Border] = useState("")
// const [card2Border, setCard2Border] = useState("")
// const [card3Border, setCard3Border] = useState("")
// const [card4Border, setCard4Border] = useState("")

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
  const [infoBodyBreakpoint, setInfoBodyBreakpoint] = useState("col-lg-8");
  const [infoCardBreakpoint, setInfoCardBreakpoint] = useState("col");
  const [infoCardBodyBreakpointClass, setInfoCardBodyBreakpoint] = useState("");

  window.addEventListener("resize", (event) => {
    if (window.innerWidth > 1500) {
      setInfoBodyBreakpoint("col-xl-8");
    } else {
      setInfoBodyBreakpoint("col-12");
    }
    if (window.innerWidth > 1050) {
      setInfoCardBreakpoint("col");
      setInfoCardBodyBreakpoint("");
    //   setCard1Border("end")
    //   setCard2Border("end")
    //   setCard3Border("end")
    //   setCard4Border("")
    } else if (window.innerWidth > 600 && window.innerWidth <= 1050) {
      setInfoCardBreakpoint("col-6");
      setInfoCardBodyBreakpoint("center");
    //   setCard1Border("")
    //   setCard2Border("end")
    //   setCard3Border("end")
    //   setCard4Border("")
    } else {
      setInfoCardBreakpoint("col-12");
      setInfoCardBodyBreakpoint("center");
    //   setCard1Border("bottom")
    //   setCard2Border("bottom")
    //   setCard3Border("bottom")
    //   setCard4Border("")
    }
  });

  return (
    <div className="analytics-body">
      <div className="row" style={{ paddingLeft: "20px" }}>
        <div
          className={`${infoBodyBreakpoint} row info-body p-3`}
          style={{ backgroundColor: "#fff" }}
        >
          {infoCardData.map((data, index) => {
            return (
              <div className={`${infoCardBreakpoint}`} key={index + 1}>
                <InfoCard
                  cardData={data}
                  cardBreakpointClass={infoCardBodyBreakpointClass}
                />
              </div>
            );
          })}
        </div>
        <div className="col-4">
            {/* <Installs chartdata={installLineChartData}/> */}
        </div>
      </div>
    </div>
  );
}
