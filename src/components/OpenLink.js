import React from "react";

const OpenLink = ({ name, link }) => {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <span style={{ color: "black" }}>{name}</span>
    </a>
  );
};

export default OpenLink;
