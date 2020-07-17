import React from "react";
import { Row, Col, Tag } from "antd";

const uiTechs = [
  "React JS",
  "Redux",
  "Redux Thunk",
  "Hooks",
  "JavaScript",
  "CSS",
  "HTML",
];
const libraries = ["Antd", "Jest", "Lodash", "ReactTable"];
const frameworks = ["Spring Boot", "Material UI", "Gatsby"];
const programmeTechs = ["Java", "Python", "SQL"];
const industryKnowledge = ["Incident", "Problem", "Change"];
const platforms = [
  "Jenkins",
  "OpenShift container",
  "ELK",
  "nexus",
  "Sonarqube",
  "Bitbucket",
];

export default function TechnicalSkills() {
  return (
    <>
      <Row>
        <Col md={{ span: 23 }}>
          <h3 style={{ backgroundColor: "#59d7e2", color: "black" }}>
            Technical Skills
          </h3>
        </Col>
      </Row>

      <Row style={{ paddingBottom: "15px" }}>
        <Col md={{ span: 23 }}>
          <div>Front end technologies : </div>
          {uiTechs.map((tech) => {
            return <Tag key={tech}>{tech}</Tag>;
          })}
        </Col>
      </Row>

      <Row style={{ paddingBottom: "15px" }}>
        <Col md={{ span: 23 }}>
          <div>JS Libraries : </div>
          {libraries.map((tech) => {
            return <Tag key={tech}>{tech}</Tag>;
          })}
        </Col>
      </Row>

      <Row style={{ paddingBottom: "15px" }}>
        <Col md={{ span: 23 }}>
          <div>Frameworks : </div>
          {frameworks.map((tech) => {
            return <Tag key={tech}>{tech}</Tag>;
          })}
        </Col>
      </Row>

      <Row style={{ paddingBottom: "15px" }}>
        <Col md={{ span: 23 }}>
          <div>Programming and RDMS : </div>
          {programmeTechs.map((tech) => {
            return <Tag key={tech}>{tech}</Tag>;
          })}
        </Col>
      </Row>

      <Row style={{ paddingBottom: "15px" }}>
        <Col md={{ span: 23 }}>
          <div>Service Management : </div>
          {industryKnowledge.map((tech) => {
            return <Tag key={tech}>{tech}</Tag>;
          })}
        </Col>
      </Row>

      <Row style={{ paddingBottom: "50px" }}>
        <Col md={{ span: 23 }}>
          <div>Platforms : </div>
          {platforms.map((tech) => {
            return <Tag key={tech}>{tech}</Tag>;
          })}
        </Col>
      </Row>
    </>
  );
}
