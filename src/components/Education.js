import React from "react";
import { Divider, Tag, Timeline, Row, Col } from "antd";

export default function Education() {
  return (
    <>
      <div className="padd-left" id="component-education">
        <Row>
          <Col xs={23} sm={23} md={23} lg={23} xl={23}>
            <Divider orientation="left">Education</Divider>
          </Col>
        </Row>

        <Timeline mode="left">
          <Timeline.Item color="green" className="black-font">
            <div>
              <Tag>2017</Tag>
              <Tag>CGPA : 8.6/10</Tag>
            </div>
            <div>
              Bachelor of Technology in Electronics & Communication Engineering,
              Andhra University, Andhra Pradesh
            </div>
          </Timeline.Item>
          <Timeline.Item color="green" className="black-font">
            <div>
              <Tag>2013</Tag>
              <Tag>Percentage : 97.2%</Tag>
            </div>
            <div>Board of Intermediate Education, Sasi, Andhra Pradesh</div>
          </Timeline.Item>
          <Timeline.Item color="green" className="black-font">
            <div>
              <Tag>2013</Tag>
              <Tag>Percentage : 92.6%</Tag>
            </div>
            <div>Secondary School Education, Bhasyam, Andhra Pradesh</div>
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  );
}
