import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [sidebarClassList, setSidebarClassList] = useState("sidebar");
  const [sidebarActiveState, setSideBarActiveState] = useState(true);
  const [toggleBtnIconClass, setToggleBtnIconClass] = useState("bx-log-in");
  const [selectedBtn, setSelectedBtn] = useState("");

  const btnHoverCss = {
    color: "#5473E8",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px 2px #fff",
  };

  const dashboardTogglerHandler = () => {
    setSideBarActiveState(!sidebarActiveState);

    if (sidebarActiveState) {
      setSidebarClassList("sidebar active");
      setToggleBtnIconClass("bx-log-out");
    } else {
      setSidebarClassList("sidebar");
      setToggleBtnIconClass("bx-log-in");
    }
  };

  return (
    <>
      <div className={sidebarClassList}>
        <div className="logo_content">
          <div className="logo">
            <i className="bx bxl-c-plus-plus"></i>
            <div className="logo_name">Coding Lab</div>
          </div>
          <i
            className={`bx ${toggleBtnIconClass}`}
            id="btn"
            onClick={dashboardTogglerHandler}
          ></i>
        </div>
        <ul className="nav_list">
          <li>
            <Link to="#">
              <i className="bx bx-search"></i>
              <input type="text" placeholder="Search..." />
            </Link>
            <span className="tooltip">Search</span>
          </li>
          <li>
            <Link
              id="homeBtn"
              to="/"
              style={selectedBtn === "homeBtn" ? btnHoverCss : {}}
              onClick={() => {
                setSelectedBtn("homeBtn");
              }}
            >
              <i className="bi bi-house-door"></i>
              <span className="links_name">Home</span>
            </Link>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <Link
              id="modelBtn"
              to="/"
              style={selectedBtn === "modelBtn" ? btnHoverCss : {}}
              onClick={() => {
                setSelectedBtn("modelBtn");
              }}
            >
              <i className="bi bi-box"></i>
              <span className="links_name">Model</span>
            </Link>
            <span className="tooltip">Model</span>
          </li>
          <li>
            <Link
              id="dashboardBtn"
              to="/dashboard"
              style={selectedBtn === "dashboardBtn" ? btnHoverCss : {}}
              onClick={() => {
                setSelectedBtn("dashboardBtn");
              }}
            >
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </Link>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <Link
              to="/pie"
              id="pieBtn"
              style={selectedBtn === "pieBtn" ? btnHoverCss : {}}
              onClick={() => {
                setSelectedBtn("pieBtn");
              }}
            >
              <i className="bi bi-pie-chart"></i>
              <span className="links_name">Pie Chart</span>
            </Link>
            <span className="tooltip">Pie Chart</span>
          </li>
          <li>
            <Link to="/bar" id="barBtn" style={selectedBtn === "barBtn" ? btnHoverCss : {}}
              onClick={() => {
                setSelectedBtn("barBtn");
              }}>
              <i className="bi bi-bar-chart"></i>
              <span className="links_name">Bar Chart</span>
            </Link>
            <span className="tooltip">Bar Chart</span>
          </li>
          <li>
            <Link to="/analytics" id="analytics" style={selectedBtn === "analyticsBtn" ? btnHoverCss : {}}
              onClick={() => {
                setSelectedBtn("analyticsBtn");
              }}>
              <i className="bi bi-activity"></i>
              <span className="links_name">Analytics</span>
            </Link>
            <span className="tooltip">Analytics</span>
          </li>
          <li>
            <Link
              id="userBtn"
              to="/user"
              style={selectedBtn === "userBtn" ? btnHoverCss : {}}
              onClick={() => {
                setSelectedBtn("userBtn");
              }}
            >
              <i className="bx bx-user"></i>
              <span className="links_name">User</span>
            </Link>
            <span className="tooltip">User</span>
          </li>
          <li>
            <Link to="/settings" id="settings" style={selectedBtn === "settingBtn" ? btnHoverCss : {}}
              onClick={() => {
                setSelectedBtn("settingBtn");
              }}>
              <i className="bx bx-cog"></i>
              <span className="links_name">Settings</span>
            </Link>
            <span className="tooltip">Settings</span>
          </li>
        </ul>
        <div className="profile_content">
          <div className="profile">
            {/* <div className="profile_details">
              <img src="profile.jpg" alt="" />
              <div className="name_job">
                <div className="name">
                  <div className="name">Prem Shahi</div>
                  <div className="job">Web Designer</div>
                </div>
              </div>
            </div> */}
            {/* <div className="form-check form-switch theme-toggler-container">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
