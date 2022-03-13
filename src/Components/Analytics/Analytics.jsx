import { React, useState, useContext } from "react";
import Installs from "../Installs/Installs";
import InfoCard from "./sub-components/InfoCard";
import sidebarContext from "../Context/sidebarContext";
import { useEffect } from "react";
import { clear } from "@testing-library/user-event/dist/clear";
import OperatingSystem from "../OperatingSystem/OperatingSystem";
import PopularPages from "../PopularPages/PopularPages";
import myUserData from "../PopularPages/sub-components/Data";
import DailyActiveUsers from "../ActiveUsers/DailyActiveUsers";
import Demography from "../Demography/Demography";

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

  // Operating System Settings
  const [operatingSystemData, setOperatingSystemData] = useState({
    labels: ["iOS", "Android"],
    datasets: [
      {
        label: "Most Visited",
        data: [60, 40],
        backgroundColor: ["#5473E8", "#27ADB9"],
        borderRadius: 5,
        width: 0.4,
      },
    ],
  });

  // Popular Pages Chart Settings
  const [secondBarData, setSecondBarData] = useState([75, 90, 50, 20, 40]);

  const [popularPagesData, setpopularPagesData] = useState({
    labels: ["Search", "Locations", "Payment", "Settings", "Profile "],
    datasets: [
      {
        label: "Most Visited",
        data: myUserData.map((data) => data.barData),
        backgroundColor: "#5473E8",
        maxBarThickness: 25,
        borderRadius: 5,
      },
      {
        label: "Leaving Page",
        data: secondBarData,
        backgroundColor: "#27ADB9",
        maxBarThickness: 25,
        borderRadius: 5,
      },
    ],
  });

    // Curve Line Chart Settings
    const [activeUsersCharttData, setActiveUsersCharttData] = useState({
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
          data: [5, 25, 10, 40, 15, 30, 20],
          borderColor: "#5473E8",
          borderWidth: 5,
        },
      ],
    });

      // Doughnut chart Settings
  const [doughnutChartData, setDoughnutChartData] = useState({
    labels: ["iOS", "Android"],
    datasets: [
      {
        label: "Most Visited",
        data: [60, 40],
        backgroundColor: ["#5473E8", "#27ADB9"],
        borderRadius: 5,
        width: 0.4,
      },
    ],
  });

  // Demography chart Settings
  let scatterDataList1 = [];
  let scatterDataList2 = [];

  for (let i = 1; i <= 25; i++) {
    scatterDataList1.push({
      x: Math.floor(Math.random() * 15),
      y: Math.floor(Math.random() * 15),
    });
    scatterDataList2.push({
      x: Math.floor(Math.random() * 15),
      y: Math.floor(Math.random() * 15),
    });
  }

  const [demographyChartData, setDemographyChartData] = useState({
    labels: ["Search", "Activate", "Scan", "Payment"],
    datasets: [
      {
        label: "MacOS",
        data: scatterDataList1,
        backgroundColor: "#5473E8",
        maxBarThickness: 25,
        borderRadius: 10,
        rotation: 2,
      },
      {
        label: "Linux",
        data: scatterDataList2,
        backgroundColor: "#27ADB9",
        maxBarThickness: 25,
        borderRadius: 10,
        rotation: 2,
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
          style={{ backgroundColor: "#fff" }}
        >
          {infoCardData.map((data, index) => {
            return (
              <div className={`${infoCardBreakpoint}`} key={index + 1}>
                <InfoCard cardData={data} />
              </div>
            );
          })}
        </div>
        <div className="col-8 p-0">
          <Installs chartdata={installLineChartData} />
          <PopularPages chartdata={popularPagesData} />
          <DailyActiveUsers chartdata={activeUsersCharttData} />
          <Demography chartdata={demographyChartData} />
        </div>
        <div className="col-4 pe-0">
          <OperatingSystem chartdata={operatingSystemData} />
        </div>
      </div>
    </div>
  );
}
