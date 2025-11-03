"use client";

import React, { useEffect, useRef, useState } from "react";
import { SearchDropdown } from "./SearchBar";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

export default function SmallNavbar() {
  return (
    <div className="smallnavbar">
      <div className="d-flex justify-content-between align-items-center">
        <div className="logo">
          <img
            src="https://autocare.sgp1.cdn.digitaloceanspaces.com/media/site_logo/F-2.png"
            alt=""
          />
        </div>
        <AuthButton></AuthButton>
      </div>

      <div className="small-searchbox">

      <Dropdown></Dropdown>
      <input type="text" placeholder="Search anything" />
      <div className="img-container">
        <img src="search-normal.svg" alt="" />
        </div>
      </div>

    </div>
  );
}

const AuthButton = () => {
  return (
    <div className="AuthButton">
      <div className="login">
        <span>Login</span>
      </div>
      <div className="sign-up">
        <span>Sign Up</span>
      </div>
    </div>
  );
};


const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState("Service");
  const toggle = () => setOpen((v) => !v);
  const ref = useRef(null);
  const handleSelect = (lang) => {
    setOption(lang); // update the state
    setOpen(false); // close dropdown
  };

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <div className="searchdropdown" ref={ref}>
      <div onClick={toggle} className="dropdownbtn">
        <span>{option}</span>
        <IoIosArrowDown className="arrow-btn" />
      </div>

      <ul className={`${open ? "show" : " "}`}>
        <li
          onClick={() => {
            handleSelect("Product");
          }}
        >
          Product
        </li>
        <li
          onClick={() => {
            handleSelect("Service");
          }}
        >
          Service
        </li>
      </ul>
    </div>
  );
};

