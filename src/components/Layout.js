import React from "react";
import Header from "./Header"
import AboutMe from './AboutMe'
import SoftSkills from './SoftSkills'
import TechnicalSkills from './TechnicalSkills'
import Education from './Education'
import Experience from './Experience'
import PersonalProjects from './PersonalProjects'

import { Row, Col } from "antd"

export default function Layout() {
    return (
        <>
            <Header />

            <Row>
                <Col md={{ span: 6 }}>
                    <SoftSkills />
                    <TechnicalSkills />
                    <PersonalProjects />

                </Col>
                <Col md={{ span: 18 }} style={{ backgroundColor: "White", color: "black" }}>
                    <AboutMe />
                    <Education />
                    <Experience />
                </Col>
            </Row>
        </>
    );
}
