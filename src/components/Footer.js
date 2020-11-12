import React from "react";
import SocialAccounts from "./SocialAccounts";
export default function Footer() {
  return (
    <>
      <SocialAccounts
        myStyle={{
          backgroundColor: "#292f39",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
        myPadding="10px"
      />
    </>
  );
}
