import React from "react";
import { IoHome } from "react-icons/io5";
import { MdHomeRepairService } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
export default function FixedNavbar() {
  return (
    <div className="fixed-navbar">
      <div className="navlink">
        <IoHome className="icon" />
        <span>Home</span>
      </div>
      <div className="navlink">
        <IoStorefrontSharp className="icon"/>
        <span>Find Product</span>
      </div>
      <div className="navlink">
        <MdHomeRepairService className="icon" />
        <span>Book Service</span>
      </div>
    </div>
  );
}
