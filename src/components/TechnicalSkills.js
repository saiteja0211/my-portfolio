import React from "react";
import { Row, Col, Tag, Divider, Tooltip } from "antd";
import OpenLink from "./OpenLink";

const uiTechs = {
  "React JS": "https://reactjs.org/",
  "React Hooks": "https://reactjs.org/docs/hooks-intro.html",
  Redux: "https://redux.js.org/",
  "Redux Thunk": "https://www.npmjs.com/package/redux-thunk",
  "Redux Logger": "https://www.npmjs.com/package/redux-logger",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  CSS: "",
  HTML: "",
  Nivo: "https://nivo.rocks/",
};

const otherUILibs = {
  Antd: "https://ant.design/",
  "Material UI": "https://material-ui.com/",
  Gatsby: "https://www.gatsbyjs.com/",
  Axios: "https://www.npmjs.com/package/axios",
  "React Router": "https://reactrouter.com/",
  "React Table": "https://react-table.tanstack.com/",
  "Styled Components": "https://styled-components.com/",
  Lodash: "https://lodash.com/",
  "queue-anim": "https://www.npmjs.com/package/rc-queue-anim",
  Jest: "https://jestjs.io/",
};
const backend = ["Spring Boot", "Java", "Hibernate", "SQL"];

const platforms = [
  "Agile",
  "Jira",
  "Jenkins",
  "Bitbucket",
  "Git",
  "OpenShift container",
  "SonarQube",
  "Nexus",
  "ELK",
  "BMC Remedy",
];

const otherTechs = [
  "Python",
  "Incident Management",
  "Problem Management",
  "Change Management",
  "micro frontends",
  "micro services",
  "JWT",
];
export default function TechnicalSkills() {
  return (
    <div className="padd-left" id="component-technical-skills">
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23}>
          <Divider style={{ color: "black", margin: "5px" }} orientation="left">
            Technical Skills
          </Divider>
        </Col>
      </Row>

      <Row className="padd-bottom">
        <Tooltip placement="rightBottom" title="Primary Skills">
          <div>Frontend Technologies :</div>
        </Tooltip>
        <Col xs={24} sm={24} md={23} lg={23} xl={23}>
          {Object.keys(uiTechs).map((tech) => {
            return (
              <Tag key={tech}>
                <OpenLink name={tech} link={uiTechs[tech]} />
              </Tag>
            );
          })}
        </Col>
      </Row>

      <Row className="padd-bottom">
        <Col xs={24} sm={24} md={23} lg={23} xl={23}>
          <div>JS Libraries & Frameworks: </div>
          {Object.keys(otherUILibs).map((tech) => {
            return (
              <Tag key={tech}>
                <OpenLink name={tech} link={otherUILibs[tech]} />
              </Tag>
            );
          })}
        </Col>
      </Row>

      <Row className="padd-bottom">
        <Col xs={24} sm={24} md={23} lg={23} xl={23}>
          <div>Backend Technologies : </div>
          {backend.map((tech) => {
            return <Tag key={tech}>{tech}</Tag>;
          })}
        </Col>
      </Row>

      <Row className="padd-bottom">
        <Col xs={24} sm={24} md={23} lg={23} xl={23}>
          <div>Platform knowledge : </div>
          {platforms.map((each) => {
            return <Tag key={each}>{each}</Tag>;
          })}
        </Col>
      </Row>

      <Row className="padd-bottom">
        <Col xs={24} sm={24} md={23} lg={23} xl={23}>
          <div>Other Industry knowledge & Techs : </div>
          {otherTechs.map((tech) => {
            return <Tag key={tech}>{tech}</Tag>;
          })}
        </Col>
      </Row>
    </div>
  );
}
