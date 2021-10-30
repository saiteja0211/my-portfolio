import React from "react";
import { Divider, Row, Col } from "antd";

export default function AboutMe() {
  return (
    <>
      <div className="padd-left" id="component-about-me">
        <Row>
          <Col xs={23} sm={23} md={23} lg={23} xl={23}>
            <Divider orientation="left">About Me</Divider>
          </Col>
        </Row>
        <div>
          A cognitive software developer with 4.6+ years of expertise in
          designing & developing reliable web applications. My work highly
          focuses on composition, balance, contrast, performance, responsive &
          modularity. Developed many independent web applications. Adaptive,
          enthusiastic and passionate to learn new web technologies.
        </div>
      </div>
    </>
  );
}
