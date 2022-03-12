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

  const searchBtnHandler = () => {};

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
          <li onClick={searchBtnHandler}>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box"
                viewBox="0 0 16 16"
              >
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
              </svg>
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
            <Link to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pie-chart"
                viewBox="0 0 16 16"
              >
                <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
              </svg>
              <span className="links_name">Pie Chart</span>
            </Link>
            <span className="tooltip">Pie Chart</span>
          </li>
          <li>
            <Link to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bar-chart"
                viewBox="0 0 16 16"
              >
                <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
              </svg>
              <span className="links_name">Bar Chart</span>
            </Link>
            <span className="tooltip">Bar Chart</span>
          </li>
          <li>
            <Link to="/analytics">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-activity"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                />
              </svg>
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
            <Link to="#">
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
            {/* <div class="form-check form-switch theme-toggler-container">
              <input
                class="form-check-input"
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
