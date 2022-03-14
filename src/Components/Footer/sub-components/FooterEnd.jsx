import React from "react";
import { useState } from "react";

export default function FooterEnd() {
  const selectedBtnCss = {
    backgroundColor: "#5473e8",
    color: "#fff",
    borderRadius: "40px",
    boxShadow: "0 0 2px 2px #5473e8",
  };

  const [selectedBtn, setSelectedBtn] = useState("footer-profile")

  return (
    <div className="d-flex justify-content-between align-items-center footer-end">
      <div className="footer-end-copyright">
        <p className="footer-info-title m-0">Typeface by Kunal</p>
      </div>

      <div className="analytics-section p-3" id="footer-toggle-section">
        <span className="ms-1 py-2 px-3 footer-toggle-btn" id="footer-profile"
        style={(selectedBtn === "footer-profile") ? selectedBtnCss : {}}
        onClick={() => {
            setSelectedBtn("footer-profile")
        }}>
          Profile
        </span>
        <span className="ms-4 py-2 px-3 footer-toggle-btn" id="footer-services"
        style={(selectedBtn === "footer-services") ? selectedBtnCss : {}}
        onClick={() => {
            setSelectedBtn("footer-services")
        }}>
          Services
        </span>
        <span className="ms-4 py-2 px-3 footer-toggle-btn" id="footer-work"
        style={(selectedBtn === "footer-work") ? selectedBtnCss : {}}
        onClick={() => {
            setSelectedBtn("footer-work")
        }}>
          Work
        </span>
        <span
          className="ms-4 me-1 py-2 px-3 footer-toggle-btn"
          id="footer-contact"
          style={(selectedBtn === "footer-contact") ? selectedBtnCss : {}}
          onClick={() => {
              setSelectedBtn("footer-contact")
          }}
        >
          Contact
        </span>
      </div>
      <p className="footer-info-title m-0">© 2022 DataPrivacy Imprint</p>
    </div>
  );
}
