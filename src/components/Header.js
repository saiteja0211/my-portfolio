import React from "react";
import { Row, Col } from "antd";
import {
  MailFilled,
  PhoneFilled,
  StarOutlined,
  EnvironmentFilled,
  InstagramFilled,
  FacebookFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import saitejaPic from "../img/saitejaPic.jpg";

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
            <Col xs={15} sm={12} md={14} lg={16} xl={12}>
              <h1 style={{ fontFamily: "sans-serif", color: "#59d7e2" }}>
                Sai Teja Jonnadula
              </h1>
            </Col>
            <Col xs={24} sm={24} md={10} lg={8} xl={12}></Col>
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
                <StarOutlined /> Site Reliablity Engineer
              </div>
              <div>
                <StarOutlined /> Production Support Engineer
              </div>
            </Col>
            <Col
              xs={16}
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
                    <PhoneFilled /> +91 9948124459
                  </div>
                  <div>
                    <EnvironmentFilled /> Hyderabad, Telangana
                  </div>
                </div>
              </div>
            </Col>
            <Col
              xs={8}
              sm={8}
              md={4}
              lg={4}
              xl={4}
              style={{ borderLeft: "1px solid" }}
            >
              <div
                style={{
                  paddingLeft: "10px",
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/sai-teja-jonnadula-600629157/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinFilled
                    style={{ color: "#44bfff", fontSize: "22px" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/saiteja.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramFilled
                    style={{ color: "#bc1a7a", fontSize: "22px" }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/saitejajonnadula"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookFilled
                    style={{ color: "#566fa2", fontSize: "22px" }}
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
