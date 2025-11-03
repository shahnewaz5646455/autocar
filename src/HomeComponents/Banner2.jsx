import React from "react";
import Dropdown2 from "./Dropdown2";

export default function Banner2() {
  const allButtons = [
    {
      name: "Vehicle Types",
      option: ["Passenger Car", "Motor Cycle", "Heavy Vehicle", "Others"],
    },
    {
      name: "Product Category",
      option: ["Cash", "Card", "Bkash"],
    },
    {
      name: "Select Brand",
      option: ["Cash", "Card", "Bkash"],
    },
    {
      name: "Select Model",
      option: ["Cash", "Card", "Bkash"],
    },
    {
      name: "Model Year",
      option: ["2012", "2014", "2024"],
    },
  ];

  return (
    <div className="container">
      <div className="main-banner-container">
        <Banner2titles></Banner2titles>
        <Twobutton></Twobutton>
        <div className="d-flex banner2btns">
          {allButtons.map((btn) => (
            <Dropdown2 key={btn.name} name={btn.name} options={btn.option} />
          ))}
          <Keyword></Keyword>
          <Search></Search>
        </div>
      </div>
    </div>
  );
}

const Keyword = () => {
  return (
    <div className="keyword">
      <input type="text" placeholder="Keyword" />
    </div>
  );
};

const Search = () => {
  return (
    <div className="search-btn">
      <span>Search</span>
    </div>
  );
};

const Twobutton = () => {
  return (
    <div className="twobutton">
      <div className="fuel">
        <img src="fuel.svg" alt="" />
        <span>Search for Products...</span>
      </div>
      <div className="service">
        <img src="services.svg" alt="" />
        <span>Search for Services...</span>
      </div>
    </div>
  );
};

const Banner2titles = () => {
  return (
    <div className="bannertiles">
      <h2>Find Your Automotive Parts and Services</h2>
      <p>
        Explore a vast selection of automotive parts and services tailored to
        your needs. Whether you &apos re seeking specific components or
        specialized maintenance
      </p>
    </div>
  );
};
