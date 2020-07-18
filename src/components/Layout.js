import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import SoftSkills from "./SoftSkills";
import TechnicalSkills from "./TechnicalSkills";
import Education from "./Education";
import Experience from "./Experience";
import PersonalProjects from "./PersonalProjects";
import SelfInterests from "./SelfInterests";

import { Row, Col } from "antd";

export default function Layout() {
  return (
    <>
      <Header />

      <Row>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <SoftSkills />
          <TechnicalSkills />
          <SelfInterests />
          <PersonalProjects />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={18}
          lg={18}
          xl={18}
          style={{ backgroundColor: "White", color: "black" }}
        >
          <AboutMe />
          <Education />
          <Experience />
        </Col>
      </Row>
    </>
  );
}
