import React from "react";
import { Divider, Tag, Timeline } from "antd";
import {
  ClockCircleOutlined,
  StarTwoTone,
  RocketTwoTone,
} from "@ant-design/icons";

const projectdetails = [
  {
    id: "1",
    dot: <ClockCircleOutlined className="normal-font-size" />,
    title: "Service virtualization",
    info: [
      "2020",
      "react",
      "react-hooks",
      "redux",
      "react-table",
      "micro-frontend",
    ],
    description: (
      <div>
        Service virtualization mimics service oriented architecture and allows
        to create and consume HTTP/S and IBM MQ virtual services by virtualizing
        request or response. Ability to create, edit, test, clone, approve,
        download, delete & even schedule virtual service(s).
      </div>
    ),
  },
  {
    id: "2",
    dot: <StarTwoTone twoToneColor="#eb2f96" className="normal-font-size" />,
    title: "Chaos Engineering",
    info: [
      "2020",
      "react",
      "redux",
      "redux-thunk",
      "redux-logger",
      "chaos engineering",
      "elastic search",
      "nivo visualization",
      "micro-frontend",
    ],
    description: (
      <div>
        Chaos engineering is controlled approach to experiment & identify
        vulnerabilities in production environment before they become outages.
        Ability to trigger different types of attacks on targeted application or
        machine. Ability to customise, save & schedule attacks, check detailed
        attack report.
      </div>
    ),
  },
  {
    id: "3",
    dot: <StarTwoTone twoToneColor="#eb2f96" className="normal-font-size" />,
    title: "Code sharing platform",
    info: ["2020", "react", "react-hooks", "react-context", "micro-frontend"],
    description: (
      <div>
        Code sharing platform for developers. Ability to create, share, fork,
        clone, download, watch, like, comment repositories/snippets shared on
        this platform.
      </div>
    ),
  },
  {
    id: "4",
    dot: <StarTwoTone twoToneColor="#eb2f96" className="normal-font-size" />,
    title: "Tasks & Requests",
    info: ["2019", "react", "request-workflow", "micro-frontend"],
    description: (
      <div>
        Involves in tracking & actioning access requests created by users.
        Requests go through approval process and subjected to either approve or
        reject. Ability to conditionally render based on roles.
      </div>
    ),
  },
  {
    id: "5",
    dot: <StarTwoTone twoToneColor="#eb2f96" className="normal-font-size" />,
    title: "Onboarding Service",
    info: [
      "2019",
      "spring boot",
      "java",
      "bitbucket-jenkins integration",
      "enhanchements",
      "micro-service",
    ],
    description: (
      <div>
        Involves in automated onboarding of a application & provisioning
        platforms and dev-tools. Ability to onboard new applications and
        selective provisioning of tools and paltforms.
      </div>
    ),
  },
  {
    id: "6",
    dot: <StarTwoTone twoToneColor="#eb2f96" className="normal-font-size" />,
    title: "DataBase Service",
    info: ["2019", "spring boot", "java", "jira integration", "micro-service"],
    description: (
      <div>
        Ability to create, mapp security groups to database tables and which in
        turn mapped to users for access management. Involves in auto jira
        request creation. Ability to configuring security groups to tabels and
        users.
      </div>
    ),
  },
  {
    id: "7",
    dot: <StarTwoTone twoToneColor="#eb2f96" className="normal-font-size" />,
    title: "Tool access review",
    info: ["2019", "react", "user access review", "micro-frontend"],
    description: (
      <div>
        A bi-yearly review system triggered to application owners. It is onestop
        place for application Owners to review user access under cicd, testing &
        production tools and choose either retain/revoke action.
      </div>
    ),
  },
  {
    id: "8",
    dot: <RocketTwoTone className="normal-font-size" />,
    title: "Report Generator, Procedure Store",
    info: ["2018", "react", "javascript", "css", "html"],
    description: (
      <div>
        A middleware report generator. Ability to view and download report.
        Procedure Store is a central hub all procedures and guidelines.
      </div>
    ),
  },
  {
    id: "9",
    dot: <RocketTwoTone className="normal-font-size" />,
    title: "Xtraction",
    info: [
      "2018",
      "visualization",
      "incident problem change tracker",
      "custom alerts",
    ],
    description: (
      <div>
        A third party application used for pictorial representation. It involves
        in choosing a remedy tool database & visualizers, schedule customised
        alerts to users before breaching SLA and service standards. Reporting
        Toil has been significantly reduced with automated periodical exports
        and track of incidents, problems, changes for production suport teams.
      </div>
    ),
  },
  {
    id: "10",
    dot: <RocketTwoTone className="normal-font-size" />,
    title: "Production Application Support",
    info: [
      "2017",
      "incident management",
      "problem management",
      "change management",
      "knowledge management",
      "BMC remedy tool",
    ],
    description: (
      <div>
        Supported and ensured Service level agreements and service standards in
        track for incidents, problems, changes. Production support for 11
        applications(inhouse, vendor). Involved in support, minor enhanchements
        and environemnt migration of legacy applications.
      </div>
    ),
  },
];

export default function Experience() {
  return (
    <>
      <div className="padd-left" id="component-professional-experience">
        <Divider orientation="left">Professional Experience</Divider>
        <Timeline mode="left">
          {projectdetails.map((project) => {
            return (
              <Timeline.Item
                dot={project.dot}
                color={project.dotColor}
                key={project.id}
              >
                <div className="box" style={{ padding: "10px" }}>
                  <div>
                    <div style={{ paddingBottom: "5px" }}>
                      <span className="project-title">{project.title} : </span>
                      {project.info.map((value) => {
                        return <Tag key={value}>{value}</Tag>;
                      })}
                    </div>
                  </div>
                  <div>{project.description}</div>
                </div>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </>
  );
}
