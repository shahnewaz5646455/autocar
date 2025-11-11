import React from "react";

export default function AdvisorForm() {
  return (
    <div className="container advisorform">
      <h2>Service Advisor</h2>
      <p>
        Are you passionate about cars and providing exceptional customer
        service? We&apos;re looking for a skilled Service Advisor to join our
        team and help us deliver top-notch service to our valued customers.
      </p>

      <Form></Form>
    </div>
  );
}

const Form = () => {
  return (
    <div className="form-box">
      <div className="position-title">
        <h2>Position Applied For Service Advisor</h2>
      </div>
      <div className="input-group full-name">
        <lebel>Full Name</lebel>
        <input type="text" placeholder="Text Input" />
      </div>
      <div className="input-group full-name">
        <lebel>Email Address</lebel>
        <input type="text" placeholder="Text Input" />
      </div>
      <div className="input-group full-name">
        <lebel>Phone Number</lebel>
        <input type="text" placeholder="Text Input" />
      </div>
      <div className="input-group full-name">
        <lebel>Address</lebel>
        <input type="text" placeholder="Text Input" />
      </div>
      <div className="cover-letter">
        <lebel>Cover latter</lebel>
        <textarea
          placeholder="Write your cover letter..."
          
        ></textarea>
      </div>

      <div className="cv-upload">
        <div className="upload-btn no-active">
          {/* <img src="paperclip-2.svg" alt="" /> */}
          <span>Upload CV</span>
        </div>
        <div className="upload-btn">
          <img src="paperclip-2.svg" alt="" />
          <span>Upload CV</span>
        </div>
      </div>

      <button>Submit</button>
    </div>
  );
};
