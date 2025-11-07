import React from "react";

export default function BlogProduct() {
  return (
    <div className="container">
      <div className="browser-content">
        <Navbar></Navbar>

        {/* browse banner */}
        <Banner></Banner>
      </div>
    </div>
  );
}

const Banner = () => {
  return (
    <div className="Browse-banner">
      <img src="bgcar3.png" alt="" />
    </div>
  );
};

const Navbar = () => {
  return <div className="browser-nav">

    <ul>
        <li className="main">All Blog</li>
        <li>Maintenance</li>
        <li>Service Car</li>
        <li>Custom</li>
        <li>Seasonal</li>
        <li>Buying</li>
    </ul>

    <div className="search-bar">
        <img src="search-normal.svg" alt="" />
        <input placeholder="Search Article" type="text" />

    </div>
  </div>;
};
