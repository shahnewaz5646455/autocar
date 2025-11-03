import React from "react";
import Navlinks from "./Navlinks";
import Dropdownbtn from "./Dropdownbtn";
import SocialIcons from "./SocialIcons";
import Stores from "./Stores";

export default function Navbar() {
  return (
    <div className="mainnav">
      <div className="d-flex contents">
        <Navlinks></Navlinks>
        <div className="d-flex content">
          <div className="d-flex align-items-center dropsocial">
            <Dropdownbtn></Dropdownbtn>

            <SocialIcons></SocialIcons>
          </div>
          <Stores></Stores>
        </div>
      </div>
    </div>
  );
}
