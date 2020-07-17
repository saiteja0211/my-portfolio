import React from "react";
import { Divider, Tag, Timeline } from "antd";

export default function Education() {
  return (
    <>
      <div style={{ paddingLeft: "7px" }}>
        <Divider orientation="left">Education</Divider>

        <Timeline mode="left">
          <Timeline.Item color="green">
            <div>
              <Tag>2017</Tag>
              <Tag>CGPA : 8.6/10</Tag>
            </div>
            <div>
              Bachelor of Technology in Electronics & Communication Engineering
            </div>
            <div>Andhra University, Andhra Pradesh</div>
          </Timeline.Item>
          <Timeline.Item color="green">
            <div>
              <Tag>2013</Tag>
              <Tag>Percentage : 97.2%</Tag>
            </div>
            <div>Board of Intermediate Education</div>
            <div>Sasi, Andhra Pradesh</div>
          </Timeline.Item>
          <Timeline.Item color="green">
            <div>
              <Tag>2013</Tag>
              <Tag>Percentage : 92.6%</Tag>
            </div>
            <div>Secondary School Education</div>
            <div>Bhasyam, Andhra Pradesh</div>
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  );
}
