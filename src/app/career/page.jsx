import React from "react";

export default function Career() {
  return (
    <div className="container">
      <div className="career">
        <CareerDiv></CareerDiv>
        <Jobopenning></Jobopenning>
      </div>
    </div>
  );
}

const CareerDiv = () => {
  return (
    <div className="career-div">
      <h2>Career </h2>
      <p>
        At AutoCare, we are dedicated to providing top-notch automotive services
        and products, and we are looking for passionate individuals to join our
        team. Whether you&apos;re an experienced professional or just starting
        out, we offer a supportive environment where you can grow and thrive.
        Explore our current job openings and discover how you can drive your
        career forward with us.
      </p>

      <div className="img-container">
        <img src="careerimg2.png" alt="" />
      </div>
    </div>
  );
};

const Jobopenning = () => {
  return (
    <div className="job-openning">
      <h2>Current Job Openings</h2>
      <p>
        Unlock Your Potential: Explore our latest job openings and take the next
        step in your career journey. Become a Part of Something Great: Join a
        dynamic team dedicated to innovation, growth, and making a difference.
        Ready for a New Challenge? Discover fulfilling roles that align
      </p>
      <CardContainer></CardContainer>

      <div className="bg-img-container">
        <img src="careerbg2.png" alt="" />
      </div>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="card-container">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

const Card = () => {
  return (
    <div className="card-content">
      <div className="info">
        <div className="service">
          <h2>Service Advisor</h2>
          <div className="divider"></div>
          <p>Full Time</p>
        </div>

        <div className="location-time">
          <div className="location">
            <img src="location-add.svg" alt="" />
            <span>Dhanmondi,Dhaka</span>
          </div>
          <div className="time">
            <img src="calendar-2.svg" alt="" />
            <span>26 May, 2024</span>
          </div>
        </div>
      </div>

      <div className="button">
        <span>Apply Now</span>
      </div>
    </div>
  );
};
