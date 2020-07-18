import React from "react";
import { Row, Col } from "antd";
import {
  CompassOutlined,
  CameraOutlined,
  ChromeOutlined,
  LaptopOutlined,
} from "@ant-design/icons";

export default function SelfInterests() {
  return (
    <>
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23}>
          <h3 style={{ backgroundColor: "#59d7e2", color: "black" }}>
            Self Interests
          </h3>
        </Col>
      </Row>

      <Row>
        <Col className="padd-bottom" xs={12} sm={12} md={23} lg={23} xl={23}>
          <CameraOutlined className="large-icons" /> Landscape Photography
        </Col>
        <Col className="padd-bottom" xs={12} sm={12} md={23} lg={23} xl={23}>
          <CompassOutlined className="large-icons" /> Travelling
        </Col>
        <Col className="padd-bottom" xs={12} sm={12} md={23} lg={23} xl={23}>
          <LaptopOutlined className="large-icons" /> Gaming
        </Col>
        <Col className="padBottom-more" xs={12} sm={12} md={23} lg={23} xl={23}>
          <ChromeOutlined className="large-icons" /> Surfing Web
        </Col>
      </Row>
    </>
  );
}
