import React from "react";

export default function SubscribeBox() {
  return (
    <div className="subscribebox">
      <div className="info">
        <div className="img-container">
          <img src="massagebox.png" alt="" />
        </div>
        <p>Subscribe and be a part of Autocares and get exciting offers!</p>
      </div>

      <div className="email-box">
        <input placeholder="Enter Your Email" type="text" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
