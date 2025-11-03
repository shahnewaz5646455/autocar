"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Dropdown2({ name, options = [] }) {
  const [open, setOpen] = useState(false);
const ref = useRef(null);
  const toggle = () => setOpen((v) => !v);

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <div ref={ref} className="dropdown2">
      <div
        onClick={toggle}
        className="dropdownbtn d-flex align-items-center "
      >
        <span>{name}</span>
        <IoMdArrowDropdown className="arrow" />
      </div>

      <ul className={open ? "show" : ""}>
        {options.map((op, index) => (
          <li key={index}>{op}</li>
        ))}
      </ul>
    </div>
  );
}
