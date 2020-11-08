import React from "react";
import { Row, Col } from "antd";

const Awards = () => {
  return (
    <div className="pad-bottom-more">
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23}>
          <h3 className="skill-header">Awards & Recognitions</h3>
        </Col>
      </Row>

      <Row>
        <Col className="padd-bottom" xs={12} sm={12} md={23} lg={23} xl={23}>
          Super Rookie,{" "}
          <span style={{ fontSize: "9px" }}>by LOBT Executive Director</span>
        </Col>
        <Col className="padd-bottom" xs={12} sm={12} md={23} lg={23} xl={23}>
          Innovation Hero,{" "}
          <span style={{ fontSize: "9px" }}>by LOBT Vice President</span>
        </Col>
        <Col className="padd-bottom" xs={12} sm={12} md={23} lg={23} xl={23}>
          Purpose-Driven,{" "}
          <span style={{ fontSize: "9px" }}>by LOBT Asst Vice President</span>
        </Col>
        <Col className="padd-bottom" xs={12} sm={12} md={23} lg={23} xl={23}>
          Relationship-led,{" "}
          <span style={{ fontSize: "9px" }}>by Scrum Master</span>
        </Col>
        <Col className="padd-bottom" xs={12} sm={12} md={23} lg={23} xl={23}>
          Insta Award,{" "}
          <span style={{ fontSize: "9px" }}>by Project Manager</span>
        </Col>
        <Col className="padd-bottom" xs={12} sm={12} md={23} lg={23} xl={23}>
          Tech Support Award, <span style={{ fontSize: "9px" }}>by Client</span>
        </Col>
      </Row>
    </div>
  );
};

export default Awards;
