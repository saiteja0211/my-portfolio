import React from "react";
import { Row, Col, Tooltip } from "antd";
import {
  GithubOutlined,
  ShoppingCartOutlined,
  WechatOutlined,
  BookOutlined,
  HeartOutlined,
} from "@ant-design/icons";

export default function PersonalProjects() {
  return (
    <>
      <Row>
        <Col md={{ span: 23 }}>
          <h3 style={{ backgroundColor: "#59d7e2", color: "black" }}>
            Personal Projects
          </h3>
        </Col>
      </Row>

      <Tooltip placement="topLeft" title="You are currently watching this UI">
        <div className="padd-bottom">
          <HeartOutlined className="large-icons" /> My Portfolio
        </div>
      </Tooltip>

      <div className="padd-bottom">
        <a
          href="https://react-mobile-purchase.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <ShoppingCartOutlined className="large-icons" /> MobiKart
        </a>
      </div>

      <div className="padd-bottom">
        <a
          href="https://innovation-hub-ui.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <WechatOutlined className="large-icons" /> InnovationHub
        </a>
      </div>

      <div className="padd-bottom">
        <a
          href="http://gatsby-portfolio-ui.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <BookOutlined className="large-icons" /> Gatsby Portfolio
        </a>
      </div>

      <div className="padd-bottom">
        <a
          href="http://gatsby-portfolio-ui.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <GithubOutlined className="large-icons" /> My GitHub Profile
        </a>
      </div>
    </>
  );
}
