import React from "react";

export default function AllInfo() {
  return (
    <div className="all-info">
      <div className="logo-des d-flex align-items-center">
        <div className="logo-container">
          <img src="carlogo.png" alt="" />
        </div>
        <h2>Auto Care</h2>
      </div>
      <p className="description">
        Rent your belongings to people in your area to make some extra cash.
      </p>
      <div className="logos d-flex align-items-center">
        <div className="logo">
          <img src="facebookwhite.svg" alt="" />
        </div>
        <div className="logo">
          <img src="instagramwhite.svg" alt="" />
        </div>
        <div className="logo">
          <img src="twitter.svg" alt="" />
        </div>

        <div className="logo">
          <img src="linkendwhite.svg" alt="" />
        </div>
      </div>

      <div className="assistant">
        <h3>Need Assistance?</h3>
        <div className="location">
          <h4>Get In Touch :</h4>
          <p className="number">+14 88854874124</p>
          <p className="email">contactus@autocare.com</p>
          <p className="addres-title">Address :</p>

          <p className="address">Road-1, Dhaka 1230, Bangladesh</p>
        </div>
      </div>
    </div>
  );
}
