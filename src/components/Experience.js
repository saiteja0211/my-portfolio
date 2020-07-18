import React from "react";
import { Divider, Tag, Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const projectdetails = [
  {
    id: "1",
    dotColor: "red",
    title: "SVGenie-ui",
    info: ["2020", "DBS"],
    techs: ["react", "hooks", "react-table", "react-context"],
    description: (
      <div>
        Service virtualization helps the user to mimic service oriented
        architecture and allows user to create and consume HTTP/S and IBM MQ
        virtual services. User can create, edit, test, clone, approve, download,
        delete virtual service(s). It is a hassle-free process for frontend
        developers without any dependency on backend services.
      </div>
    ),
  },
  {
    id: "2",
    dotColor: "red",
    title: "Wreckoon-ui",
    info: ["2020", "DBS"],
    techs: [
      "react",
      "redux",
      "redux-thunk",
      "chaos engineering",
      "elastic search",
      "enhanchements",
    ],
    description: (
      <div>
        Chaos engineering is a controlled approach to experiment & identify
        vulnerabilities in production environment before they become outages.
        Wreckoon can trigger 12 different types of attacks on targeted
        application. User can customise, save & schedule attacks, check detailed
        attack report.
      </div>
    ),
  },
  {
    id: "3",
    dotColor: "red",
    title: "Sourcex-ui",
    info: ["2020", "DBS"],
    techs: ["react", "react-hooks", "react-context"],
    description: (
      <div>
        An internal code sharing platform for developers. Any user can create,
        share, fork, clone, download, watch, like, comment repositories shared
        on this platform. Users will be rewarded monthly based on likes,
        comments, shares.
      </div>
    ),
  },
  {
    id: "4",
    dotColor: "red",
    title: "Tasks-ui, Requests-ui",
    info: ["2019", "DBS"],
    techs: [
      "react",
      "request-workflow",
      "bolt micro-frontends",
      "admin-self access",
    ],
    description: (
      <div>
        Task-ui and Request-ui involves in tracking & actioning access requests
        made by users. User subitted requests send for approval in tasks-ui and
        the primary/secondary approver can either approve or reject them. These
        requests can be tracked and rendered conditionally based on user role in
        requests-ui.
      </div>
    ),
  },
  {
    id: "5",
    dotColor: "red",
    title: "Onboarding-service",
    info: ["2019", "DBS"],
    techs: [
      "spring boot",
      "java",
      "bitbucket-jenkins integration",
      "enhanchements",
    ],
    description: (
      <div>
        Oboarding of a application involves in provisioning platforms(AWS,
        openshift) and tools(bitbucket, jenkins, nexus, sonarqube). This service
        helps the user to create a new AppCode and onboarding request with
        selected tools and paltform.
      </div>
    ),
  },
  {
    id: "6",
    dotColor: "red",
    title: "Celerity-service",
    info: ["2019", "DBS"],
    techs: ["spring boot", "java", "jira integration"],
    description: (
      <div>
        Celerity helps to create, mapp security groups to database tables and
        which in turn mapped to users for access management. On submitting
        celerity onboarding request a jira request is created and actioned. It
        also allows to configuring security groups to tabels and users.
      </div>
    ),
  },
  {
    id: "7",
    dotColor: "red",
    title: "Noncicd-entitlement-review-ui",
    info: ["2019", "DBS"],
    techs: ["react", "user access review", "bolt micro-frontends"],
    description: (
      <div>
        A bi-yearly review system triggered to application owners. Owners can
        review user access under cicd tools, testing tools, production tools and
        choose either retain/revoke action.
      </div>
    ),
  },
  {
    id: "8",
    dotColor: "blue",
    title: "Reporting hub",
    info: ["2018", "Infosys"],
    techs: ["react", "bootstrap", "css"],
    description: (
      <div>A middleware credit report facilitator used by bankers. </div>
    ),
  },
  {
    id: "9",
    dotColor: "blue",
    title: "Xtraction Tool",
    info: ["2018", "Infosys"],
    techs: [
      "visualization",
      "incident problem change tracker",
      "custom alerts",
    ],
    description: (
      <div>
        A third party application used for pictorial representation. It involves
        in choosing a remedy tool database & visualizers, schedule customised
        alerts to users before breaching SLA and service standards. Reporting
        Toil has been significantly reduced with periodical exports and track of
        incidents, problems, changes for production suport teams.
      </div>
    ),
  },
  {
    id: "10",
    dotColor: "blue",
    title: "Work Flow Integration - Production Support",
    info: ["2017", "Infosys"],
    techs: [
      "incident management",
      "problem management",
      "change management",
      "knowledge management",
      "BMC remedy tool",
    ],
    description: (
      <div>
        Worked and ensured Service level agreements and service standards in
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
                    {project.info.map((value) => {
                      return <Tag key={value}>{value}</Tag>;
                    })}
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
