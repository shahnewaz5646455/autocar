import React from "react";
import AllInfo from "./AllInfo";
import List from "./List";
import FooterStore from "./Store";
import SubscribeBox from "./SubscribeBox";
import PaymentCard from "./PaymentCard";
import CopyRight from "./CopyRight";
import Store2 from "./Store2";

export default function Footer() {
  const alllinks = [
    {
      title: "Company",
      links: ["About Us", "Contact Us", "How it work", "Career", "Quick Guide"],
    },
    {
      title: "Legal",
      links: [
        "Terms of Use",
        "Privacy Policy",
        "Refund Policy",
        "Service Policy",
        "Return Form",
      ],
    },
    {
      title: "Shop Category",
      links: [
        "Affiliates",
        "Contact Us",
        "How It Work",
        "Career",
        "Quick Guide",
      ],
    },
    {
      title: "Service Category",
      links: ["About US", "Contact Us", "How It Work", "Career", "Quick Guide"],
    },
    // Add more sections as needed
  ];

  return (
    <footer className="">
      <div className="container">
        <div className="logosAndInfo">
          <AllInfo></AllInfo>
          <div className="list-store">
            <List alllinks={alllinks} />
            <div className="store-container">
              <FooterStore></FooterStore>
            </div>
          </div>
        </div>

        <div className="subscribe-payment">
          <SubscribeBox></SubscribeBox>
          <PaymentCard></PaymentCard>
          <CopyRight></CopyRight>
        </div>
      </div>

      {/* <List alllinks={alllinks} /> */}
      {/* <FooterStore></FooterStore> */}
      {/* <SubscribeBox></SubscribeBox> */}
      {/* <PaymentCard></PaymentCard> */}
      {/* <CopyRight></CopyRight> */}

      {/* <Store2></Store2> */}
    </footer>
  );
}
