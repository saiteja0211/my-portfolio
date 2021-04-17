import React from "react";
import { Row, Col } from "antd";
import {
  MailFilled,
  StarOutlined,
  EnvironmentFilled,
} from "@ant-design/icons";
import saitejaPic from "../img/saitejaPic.jpg";
import SocialAccounts from "./SocialAccounts";

export default function Header() {
  return (
    <>
      <Row style={{ color: "#59d7e2", paddingBottom: "10px" }}>
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          xl={6}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={saitejaPic} alt="display pic"></img>
        </Col>
        <Col xs={24} sm={24} md={17} lg={17} xl={17}>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h1 style={{ fontFamily: "sans-serif", color: "#59d7e2" }}>
                Hi, I'm Sai Teja Jonnadula
              </h1>
            </Col>
          </Row>

          <Row>
            <Col
              xs={24}
              sm={24}
              md={10}
              lg={10}
              xl={10}
              style={{
                fontSize: "14px",
                fontFamily: "system-ui",
                paddingBottom: "20px",
              }}
              className="padd-bottom"
            >
              <div>
                {" "}
                <StarOutlined /> Full-Stack Web Developer
              </div>
              <div>
                <StarOutlined /> Certified System Architect
              </div>
            </Col>
            <Col
              xs={20}
              sm={16}
              md={10}
              lg={10}
              xl={10}
              className="padd-bottom"
            >
              <div
                style={{
                  fontSize: "15px",
                  fontFamily: "system-ui",
                  diaplay: "flex",
                  borderLeft: "1px solid",
                }}
              >
                <div style={{ paddingLeft: "10px" }}>
                  <div>
                    <MailFilled /> saitejajonnadula@gmail.com
                  </div>
                  <div>
                    <EnvironmentFilled /> Hyderabad, Telangana
                  </div>
                </div>
              </div>
            </Col>
            <Col
              xs={0}
              sm={0}
              md={4}
              lg={4}
              xl={4}
              style={{ borderLeft: "1px solid" }}
            >
              <SocialAccounts
                myStyle={{
                  paddingLeft: "10px",
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
