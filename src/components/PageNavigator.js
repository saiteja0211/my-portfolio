import React from "react";
import { Timeline } from "antd";

const PageNavigator = () => {
  return (
    <div>
      <Timeline mode="left">
        <Timeline.Item>
          <a href="#component-about-me" className="current">
            About Me
          </a>
        </Timeline.Item>

        <Timeline.Item>
          <a href="#component-professional-career" className="current">
            Professional career
          </a>
        </Timeline.Item>

        <Timeline.Item>
          <a href="#component-education" className="current">
            Education
          </a>
        </Timeline.Item>

        <Timeline.Item>
          <a href="#component-technical-skills" className="current">
            Technical Skills
          </a>
        </Timeline.Item>

        <Timeline.Item>
          <a href="#component-professional-experience" className="current">
            Professional Experience
          </a>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default PageNavigator;
