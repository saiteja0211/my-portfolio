import React from "react";
import { Row, Col, Tooltip } from "antd";
import {
  GithubOutlined,
  ShoppingFilled,
  WechatOutlined,
  ThunderboltFilled,
  HeartFilled,
} from "@ant-design/icons";

export default function PersonalProjects() {
  return (
    <>
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23}>
          <h3 style={{ backgroundColor: "#59d7e2", color: "black" }}>
            Personal Projects
          </h3>
        </Col>
      </Row>

      <Row>
        <Col className="padd-bottom" xs={12} sm={12} md={23} lg={23} xl={23}>
          <Tooltip placement="topLeft" title="You are currently in this UI">
            <HeartFilled className="large-icons" /> My Portfolio
          </Tooltip>
        </Col>
        <Col className="padd-bottom" xs={12} sm={12} md={23} lg={23} xl={23}>
          <a
            href="https://react-mobile-purchase.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <ShoppingFilled className="large-icons" /> MobiKart
          </a>
        </Col>
        <Col className="padd-bottom" xs={12} sm={12} md={23} lg={23} xl={23}>
          <a
            href="https://innovation-hub-ui.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <WechatOutlined className="large-icons" /> InnovationHub
          </a>
        </Col>
        <Col className="padd-bottom" xs={12} sm={12} md={23} lg={23} xl={23}>
          <a
            href="http://gatsby-portfolio-ui.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <ThunderboltFilled className="large-icons" /> Gatsby Portfolio
          </a>
        </Col>
        <Col className="padBottom-more" xs={12} sm={12} md={23} lg={23} xl={23}>
          <a
            href="http://gatsby-portfolio-ui.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <GithubOutlined className="large-icons" /> My GitHub Profile
          </a>
        </Col>
      </Row>
    </>
  );
}
