import React from "react";
import { Divider, Tag, Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const projectdetails = [
  {
    id: "1",
    dotColor: "red",
    title: "SVGenie-ui",
    year: "2020",
    techs: ["react", "hooks", "react-table", "react-context"],
    description: (
      <div>description description description description description</div>
    ),
  },
  {
    id: "2",
    dotColor: "red",
    title: "Wreckoon-ui",
    year: "2020",
    techs: [
      "react",
      "redux",
      "redux-thunk",
      "chaos engineering",
      "elastic search",
      "enhanchements",
    ],
    description: (
      <div>description description description description description</div>
    ),
  },
  {
    id: "3",
    dotColor: "red",
    title: "Sourcex-ui",
    year: "2020",
    techs: ["react", "react-hooks", "react-context"],
    description: (
      <div>description description description description description</div>
    ),
  },
  {
    id: "4",
    dotColor: "red",
    title: "Tasks-ui, Requests-ui",
    year: "2019",
    techs: [
      "react",
      "request-workflow",
      "bolt micro-frontends",
      "admin-self access",
    ],
    description: (
      <div>description description description description description</div>
    ),
  },
  {
    id: "5",
    dotColor: "red",
    title: "Onboarding-service",
    year: "2019",
    techs: [
      "spring boot",
      "java",
      "bitbucket-jenkins integration",
      "enhanchements",
    ],
    description: (
      <div>description description description description description</div>
    ),
  },
  {
    id: "6",
    dotColor: "red",
    title: "Celerity-service",
    year: "2019",
    techs: ["spring boot", "java", "jira integration"],
    description: (
      <div>description description description description description</div>
    ),
  },
  {
    id: "7",
    dotColor: "red",
    title: "Noncicd-entitlement-review-ui",
    year: "2019",
    techs: ["react", "user access review", "bolt micro-frontends"],
    description: (
      <div>description description description description description</div>
    ),
  },
  {
    id: "8",
    dotColor: "blue",
    title: "Reporting hub",
    year: "2019",
    techs: ["react", "bootstrap", "css", "credit report facilitator"],
    description: (
      <div>description description description description description</div>
    ),
  },
  {
    id: "9",
    dotColor: "blue",
    title: "Xtraction Tool",
    year: "2019",
    techs: [
      "visualization",
      "incident problem change tracker",
      "custom alerts",
    ],
    description: (
      <div>description description description description description</div>
    ),
  },
  {
    id: "10",
    dotColor: "blue",
    title: "Work Flow Integration - Production Support",
    year: "2019",
    techs: [
      "incident management",
      "problem management",
      "change management",
      "knowledge management",
    ],
    description: (
      <div>description description description description description</div>
    ),
  },
];

export default function Experience() {
  return (
    <>
      <div style={{ paddingLeft: "7px" }}>
        <Divider orientation="left">Experience</Divider>
        <Timeline mode="left">
          {projectdetails.map((project) => {
            return (
              <Timeline.Item
                dot={project.id === "1" ? <ClockCircleOutlined /> : ""}
                color={project.dotColor}
              >
                <div>
                  <div style={{ paddingBottom: "5px" }}>
                    <span className="project-title">{project.title} : </span>
                    <Tag>{project.year}</Tag>
                  </div>
                  <div>
                    {project.techs.map((tech) => {
                      return <Tag>{tech}</Tag>;
                    })}
                  </div>
                </div>
                <div>{project.description}</div>
                <div style={{ paddingBottom: "40px" }}></div>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </>
  );
}
