import React from "react";
import colors from "../../Utils/colors";
import TextSection from "./sub-components/TextSection";
import footerInfoData from "./sub-components/Data/footerInfoData";
import FooterEnd from "./sub-components/FooterEnd";

export default function Footer() {
  return (
    <div id="footer">
      <hr className="footer-hr" style={{ backgroundColor: colors.appBlue }} />
      <div className="row footer-info">
        {footerInfoData.map((data, index) => {
          return (
            <div className="col d-flex justify-content-center"  key={index}>
              <TextSection data={data}/>
            </div>
          );
        })}
      </div>
      <FooterEnd />
      {/* <hr className="footer-hr" style={{ backgroundColor: colors.appBlue }} /> */}
    </div>
  );
}
