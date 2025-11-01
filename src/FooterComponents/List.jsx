import React from "react";

export default function List({ alllinks }) {
  console.log(alllinks);
  return (
    <div className="footer-lists">
      {alllinks.map((section, index) => (
        <div key={index} className="footer-list-section">
          <li className="title">{section.title}</li>
          {section.links.map((link, linkindex) => (
            <li key={linkindex}>{link}</li>
          ))}
        </div>
      ))}
    </div>
  );
}