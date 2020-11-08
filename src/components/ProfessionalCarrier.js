import React from "react";
import { Divider, Tag, Timeline, Row, Col } from "antd";

const ProfessionalCarrier = () => {
  return (
    <>
      <div className="padd-left" id="component-education">
        <Row>
          <Col xs={23} sm={23} md={23} lg={23} xl={23}>
            <Divider orientation="left">Professional Carrier</Divider>
          </Col>
        </Row>

        <Timeline mode="left">
          <Timeline.Item color="green" style={{ color: "black" }}>
            <Tag>2019 – till date</Tag>Tech Analyst | EASRE, DBS Pvt Ltd
          </Timeline.Item>

          <Timeline.Item
            color="green"
            style={{ padding: "0px", color: "black" }}
          >
            <Tag>2017 - 2019</Tag>Systems Engineer, Infosys Ltd
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  );
};
export default ProfessionalCarrier;
