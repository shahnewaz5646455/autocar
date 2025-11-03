import React from "react";

export default function Store2() {
  return (
    <div className="no-bootstrap footerStore2">
      <fieldset className="fieldset1">
        <legend>Download Customer App</legend>
        <div className="images d-flex">
          <div className="img-container">
            <img src="googleplay.svg" alt="" />
          </div>
          <div className="img-container">
            <img src="appleplay.svg" alt="" />
          </div>
        </div>
      </fieldset>
      <fieldset className="fieldset2">
        <legend>Download Vendor App</legend>
        <div className="images d-flex">
          <div className="img-container">
            <img src="googleplay.svg" alt="" />
          </div>
          <div className="img-container">
            <img src="appleplay.svg" alt="" />
          </div>
        </div>
      </fieldset>
    </div>
  );
}
