"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Dropdownbtn() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English"); // 🟢 store selected language
  const ref = useRef(null);

  const toggle = () => setOpen(v => !v);

  // 🟢 when a language is clicked
  const handleSelect = (lang) => {
    setLanguage(lang); // update the state
    setOpen(false);    // close dropdown
  };

  // close on outside click
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
      if (e.key === "Escape") {

        setOpen(false)};
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="dropdown" ref={ref}>
      <button
        type="button"
        className="dropdown-btn d-flex align-items-center"
        onClick={toggle}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <div className="btn-content d-flex justify-content-center align-items-center">
          <img src="/Vector.svg" alt="" />
          {/* 🟢 show selected language */}
          <span>{language}</span>
        </div>
        <IoMdArrowDropdown className={`arrow-icon ${open ? "open" : ""}`} />
      </button>

      <ul className={`menu ${open ? "show" : ""}`} role="menu" aria-label="language menu">
        <li onClick={() => handleSelect("English")} role="menuitem" tabIndex={0}>English</li>
        <li onClick={() => handleSelect("Bangla")} role="menuitem" tabIndex={0}>Bangla</li>
      </ul>
    </div>
  );
}
