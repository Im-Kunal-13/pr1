import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");
  let searchBtn = document.querySelector(".bx-search");

  const searchBtnHandler = () => {
    sidebar.classList.toggle("active");
  }

  const dashboardTogglerHandler = () => {
    sidebar.classList.toggle("active");

    if (sidebar.classList.contains("active")) {
      btn.classList.remove("bx-log-in");
      btn.classList.add("bx-log-out");
    } else {
      btn.classList.remove("bx-log-out");
      btn.classList.add("bx-log-in");
    }
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo_content">
          <div className="logo">
            <i className="bx bxl-c-plus-plus"></i>
            <div className="logo_name">Coding Lab</div>
          </div>
          <i
            className="bx bx-log-in"
            id="btn"
            onClick={dashboardTogglerHandler}
          ></i>
        </div>
        <ul className="nav_list">
          <li onClick={searchBtnHandler}>
            <Link to="#">
              <i className="bx bx-search" ></i>
              <input type="text" placeholder="Search..." />
            </Link>
            <span className="tooltip">Search</span>
          </li>
          <li>
            <Link to="#">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </Link>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <Link to="#">
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
        {/* <!-- <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            <img src="profile.jpg" alt="" />
            <div className="name_job">
              <div className="name">
                <div className="name">Prem Shahi</div>
                <div className="job">Web Designer</div>
              </div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </div>
      </div> --> */}
      </div>
    </>
  );
}
