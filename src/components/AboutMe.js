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
          A cognitive software developer with 3.6+ years of experience in
          developing frontend & site reliable applications and supporting
          production applications. My work highly focuses on composition,
          balance, contrast, performance, responsive & modularity. Expert in
          working with web technologies and developed many independent web
          applications. I am always adaptive, enthusiastic and passionate to
          learn new technologies/things.
        </div>
      </div>
    </>
  );
}
