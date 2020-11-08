import React from "react";
import { Rate, Row, Col } from "antd";

export default function SoftSkills() {
  return (
    <>
      <Row>
        <Col xs={23} sm={23} md={23} lg={23} xl={23}>
          <h3 className="skill-header">Soft Skills</h3>
        </Col>
      </Row>

      <div style={{ fontSize: "0.9rem" }} className="pad-bottom-more">
        <Row>
          <Col xs={7} sm={6} md={24} lg={24} xl={10}>
            Flexibility{" "}
          </Col>
          <Col xs={17} sm={18} md={24} lg={24} xl={14}>
            <Rate
              style={{ fontSize: "0.93rem" }}
              allowHalf
              disabled
              defaultValue={4.5}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={7} sm={6} md={24} lg={24} xl={10}>
            Design Thinking
          </Col>
          <Col xs={17} sm={18} md={24} lg={24} xl={14}>
            <Rate
              style={{ fontSize: "0.93rem" }}
              allowHalf
              disabled
              defaultValue={4.5}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={7} sm={6} md={24} lg={24} xl={10}>
            Collaboration
          </Col>
          <Col xs={17} sm={18} md={24} lg={24} xl={14}>
            <Rate
              style={{ fontSize: "0.93rem" }}
              allowHalf
              disabled
              defaultValue={4.5}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={7} sm={6} md={24} lg={24} xl={10}>
            Communication
          </Col>
          <Col xs={17} sm={18} md={24} lg={24} xl={14}>
            <Rate
              style={{ fontSize: "0.93rem" }}
              allowHalf
              disabled
              defaultValue={4.5}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
