import React from "react";
import { Row, Col } from "antd";
import { MailFilled, PhoneFilled, StarOutlined, EnvironmentFilled, InstagramFilled, FacebookFilled, LinkedinFilled } from '@ant-design/icons';

export default function Header() {
  return (<>
    <Row style={{ color: "#59d7e2", paddingBottom: "10px" }}>
      <Col
        md={{ span: 5 }}
        style={{ background: "#BADA55", border: "1px solid black", height: "130px", display: "flex", borderRadius: "0px 50px 0px " }}
      >ssss

      </Col>
      <Col md={{ span: 18, offset: 1 }} >
        <Row>
          <Col>
            <h1 style={{ fontFamily: "sans-serif", color: "#59d7e2" }}>Sai Teja Jonadula</h1>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 10 }} style={{ fontSize: "14px", fontFamily: "system-ui" }} >
            <div> <StarOutlined /> Full-Stack Web Developer</div>
            <div><StarOutlined /> Site Reliablity Engineer</div>
            <div><StarOutlined /> Production Support Engineer</div>
          </Col>
          <Col md={{ span: 10 }}>
            <div style={{ fontSize: "15px", fontFamily: "system-ui", diaplay: "flex", borderLeft: "1px solid" }}>
              <div style={{ paddingLeft: "10px" }}>
                <div><MailFilled /> saitejajonnadula@gmail.com</div>
                <div><PhoneFilled /> +91 9948124459</div>
                <div><EnvironmentFilled /> Hyderabad, Telangana</div>
              </div>
            </div>
          </Col>
          <Col md={{ span: 4 }} style={{ borderLeft: "1px solid" }}>
            <div style={{ paddingLeft: "10px", display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
              <a href="https://www.linkedin.com/in/sai-teja-jonnadula-600629157/" target="_blank" rel="noopener noreferrer"><LinkedinFilled style={{ color: "#44bfff", fontSize: "22px" }} /></a>
              <a href="https://www.instagram.com/saiteja.me/" target="_blank" rel="noopener noreferrer"><InstagramFilled style={{ color: "#bc1a7a", fontSize: "22px" }} /></a>
              <a href="https://www.facebook.com/saitejajonnadula" target="_blank" rel="noopener noreferrer"><FacebookFilled style={{ color: "#566fa2", fontSize: "22px" }} /></a>
            </div>
          </Col>
        </Row >


      </Col >
    </Row >
  </>);
}
