import React from "react";
import AllInfo from "./AllInfo";
import List from "./List";
import FooterStore from "./Store";
import SubscribeBox from "./SubscribeBox";
import PaymentCard from "./PaymentCard";
import CopyRight from "./CopyRight";

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
      

      <AllInfo></AllInfo>
      <List alllinks={alllinks} />
      <FooterStore></FooterStore>
      <SubscribeBox></SubscribeBox>
      <PaymentCard></PaymentCard>
      <CopyRight></CopyRight>
    
    </footer>
  );
}
