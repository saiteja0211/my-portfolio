import React from "react";
import { Rate, Row, Col } from "antd";



export default function SoftSkills() {
  return (
    <>
      <Row>
        <Col md={{ span: 23 }}>
          <h3 style={{ backgroundColor: "#59d7e2", color: "black" }}>
            Soft Skills
          </h3>
        </Col>
      </Row>

      <div style={{ fontSize: "0.9rem", paddingBottom: "50px" }}>
        <Row>
          <Col md={{ span: 10 }}>
            Leadership
          </Col>
          <Col md={{ span: 14 }}>
            <Rate style={{ fontSize: "0.93rem" }} allowHalf disabled defaultValue={4.5} />
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 10 }} >
            Collaboration
          </Col>
          <Col md={{ span: 14 }}>
            <Rate style={{ fontSize: "0.93rem" }} allowHalf disabled defaultValue={4.5} />
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 10 }}>
            Logical Thinking
          </Col>
          <Col md={{ span: 14 }}>
            <Rate style={{ fontSize: "0.93rem" }} allowHalf disabled defaultValue={4.5} />
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 10 }}>
            Communication
          </Col>
          <Col md={{ span: 14 }}>
            <Rate style={{ fontSize: "0.93rem" }} allowHalf disabled defaultValue={4.5} />
          </Col>
        </Row>
      </div>


    </>
  );
}
