import React from "react";
import { Divider, Tag, Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const projectdetails = [
  {
    id: "1",
    dotColor: "red",
    title: "SVGenie-ui, Raft-ui",
    info: ["2020", "DBS"],
    techs: ["react", "react-hooks", "redux", "react-table"],
    description: (
      <div>
        Service virtualization helps the user to mimic service oriented
        architecture and allows user to create and consume HTTP/S and IBM MQ
        virtual services by virtualizing request or response. User can create,
        edit, test, clone, approve, download, delete & even schedule virtual
        service(s). It is a hassle-free process for frontend developers without
        any dependency on backend services.
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
      "redux-logger",
      "chaos engineering",
      "elastic search",
      "nivo visualization",
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
        Involves in automated onboarding of a application & provisioning
        platforms(AWS, openshift, VPC, Mobile) and tools(Bitbucket, Jenkins,
        Nexus, SonarQube). This service helps the user to onboard new
        applications and selective provisioning of tools and paltforms.
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
        A bi-yearly review system triggered to application owners. It is onestop
        place for application Owners to review user access under cicd, testing &
        production tools and choose either retain/revoke action.
      </div>
    ),
  },
  {
    id: "8",
    dotColor: "blue",
    title: "Reporting hub",
    info: ["2018", "Infosys"],
    techs: ["react", "javascript", "css", "html"],
    description: (
      <div>
        A middleware credit report facilitator used by bankers. It’s acts as
        buffer to upstream and downstream layers. Report view and download are
        the only features available.
      </div>
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
        Toil has been significantly reduced with automated periodical exports
        and track of incidents, problems, changes for production suport teams.
      </div>
    ),
  },
  {
    id: "10",
    dotColor: "blue",
    title: "WFI - Production Support",
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
                dot={project.id === "1" ? <ClockCircleOutlined /> : ""}
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
                    <div>
                      {project.techs.map((tech) => {
                        return <Tag key={tech}>{tech}</Tag>;
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
