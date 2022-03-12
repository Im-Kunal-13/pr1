import React from "react";
import InfoCard from "./sub-components/InfoCard";

export default function Analytics() {
  const infoCardData = [
    {
      title: "User",
      txt: "46 468",
      percentage: "+33,32%",
      borderEnd: true
    },
    {
      title: "Sessions",
      txt: "98.3 K",
      percentage: "+18,77%",
      borderEnd: true
    },
    {
      title: "Avg. Session",
      txt: "3m 9sec",
      percentage: "-5,77%",
      borderEnd: true
    },
    {
      title: "Bounce Rate",
      txt: "45.72%",
      percentage: "-13,16%",
      borderEnd: false
    },
  ];

  return (
    <div className="analytics-body">
      <div className="row" style={{ paddingLeft: "20px" }}>
        <div
          className="col-8 row info-body p-3"
          style={{ backgroundColor: "#fff" }}
        >
          {/* <div className="col">
            <InfoCard />
          </div>
          <div className="col">
            <InfoCard />
          </div>
          <div className="col">
            <InfoCard />
          </div>
          <div className="col">
            <InfoCard />
          </div> */}
          {infoCardData.map((data, index) => {
            return <div className="col" key={index+1}>
              <InfoCard cardData={data} />
            </div>;
          })}
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
