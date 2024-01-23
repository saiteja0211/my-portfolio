import React from "react";
import {
  InstagramFilled,
  FacebookFilled,
  LinkedinFilled,
} from "@ant-design/icons";
const SocialAccounts = (props) => {
  return (
    <div style={props.myStyle}>
      <a
        href="https://www.linkedin.com/in/saitejajonnadula"
        target="_blank"
        rel="noopener noreferrer"
        style={{ padding: props.myPadding }}
      >
        <LinkedinFilled style={{ color: "#44bfff", fontSize: "22px" }} />
      </a>
      <a
        href="https://www.instagram.com/saiteja.me/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ padding: props.myPadding }}
      >
        <InstagramFilled style={{ color: "#bc1a7a", fontSize: "22px" }} />
      </a>
      <a
        href="https://www.facebook.com/saitejajonnadula"
        target="_blank"
        rel="noopener noreferrer"
        style={{ padding: props.myPadding }}
      >
        <FacebookFilled style={{ color: "#566fa2", fontSize: "22px" }} />
      </a>
    </div>
  );
};

export default SocialAccounts;
