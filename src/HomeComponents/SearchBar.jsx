import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

export default function SearchBar() {
  return (
    <>
      <header>
        <div className="nav2">
          <div className="logo-search">
            <div className="logo">
              <img
                src="https://autocare.sgp1.cdn.digitaloceanspaces.com/media/site_logo/F-2.png"
                alt=""
              />
            </div>

            <div className="searchbar">
              <SearchDropdown></SearchDropdown>
              <input type="text" placeholder="Search For Anything" />

              <div className="search-icon">
                <img src="search-normal.svg" alt="" />
              </div>
            </div>
          </div>

          <Locationbtn></Locationbtn>
          <AuthButton></AuthButton>
        </div>
      </header>
    </>
  );
}

const SearchDropdown = () => {
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

const AuthButton = () => {
  return (
    <div className="auth-btn">
      <div className="login-btn">
        <img src="user.svg" alt="" />
        <span>Login</span>
      </div>
      <div className="signupbtn">
        <span>Sign Up</span>
      </div>
    </div>
  );
};

const Locationbtn = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("Dhaka");
  const ref = useRef(null);

  const toggle = () => setOpen((v) => !v);

  const handleSelect = (lang) => {
    setLocation(lang); // update the state
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
    <div className="location-btn" ref={ref}>
      <div onClick={toggle} className="custombtn">
        <img src="location.svg" alt="" />
        <span>{location}</span>
        <IoMdArrowDropdown className="arrow" />
      </div>
      <ul className={`${open ? "show" : ""}`}>
        <li
          onClick={() => {
            handleSelect("Dhaka");
          }}
        >
          Dhaka
        </li>
        <li
          onClick={() => {
            handleSelect("Chitagong");
          }}
        >
          Chitagong
        </li>
      </ul>
    </div>
  );
};
