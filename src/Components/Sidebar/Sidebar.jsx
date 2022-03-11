import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [sidebarClassList, setSidebarClassList] = useState("sidebar");
  const [sidebarActiveState, setSideBarActiveState] = useState(true);
  const [toggleBtnIconClass, setToggleBtnIconClass] = useState("bx-log-in");
  const [selectedBtn, setSelectedBtn] = useState("")

  const btnHoverCss = {color: "#11101d", backgroundColor: "#fff"}

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
            <Link id="dashboardBtn" to="/dashboard" style={(selectedBtn === "dashboardBtn") ? btnHoverCss : {}} onClick ={() => {
                setSelectedBtn("dashboardBtn")
            }}>
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </Link>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <Link id="userBtn" to="/user" style={(selectedBtn === "userBtn") ? btnHoverCss : {}} onClick ={() => {
                setSelectedBtn("userBtn")
            }}>
              <i className="bx bx-user"></i>
              <span className="links_name">User</span>
            </Link>
            <span className="tooltip">User</span>
          </li>
          <li>
            <Link to="#">
              <i className="bx bx-chat"></i>
              <span className="links_name">Messages</span>
            </Link>
            <span className="tooltip">Messages</span>
          </li>
          <li>
            <Link to="#">
              <i className="bx bxs-pie-chart-alt"></i>
              <span className="links_name">Analytics</span>
            </Link>
            <span className="tooltip">Analytics</span>
          </li>
          <li>
            <Link to="#">
              <i className="bx bx-folder"></i>
              <span className="links_name">File Manager</span>
            </Link>
            <span className="tooltip">File Manager</span>
          </li>
          <li>
            <Link to="#">
              <i className="bx bx-cart"></i>
              <span className="links_name">Order</span>
            </Link>
            <span className="tooltip">Order</span>
          </li>
          <li>
            <Link to="#">
              <i className="bx bx-heart"></i>
              <span className="links_name">Saved</span>
            </Link>
            <span className="tooltip">Saved</span>
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
