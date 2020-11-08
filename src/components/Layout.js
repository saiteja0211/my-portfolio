import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import SoftSkills from "./SoftSkills";
import TechnicalSkills from "./TechnicalSkills";
import ProfessionalCarrier from "./ProfessionalCarrier";
import Education from "./Education";
import PersonalProjects from "./PersonalProjects";
import SelfInterests from "./SelfInterests";
import Awards from "./Awards";

import { Row, Col } from "antd";

export default function Layout() {
  return (
    <>
      <Header />

      <Row>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <SoftSkills />
          <Awards />
          <PersonalProjects />
          <SelfInterests />
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
          <ProfessionalCarrier />
          <Education />
          <TechnicalSkills />
        </Col>
      </Row>
    </>
  );
}
