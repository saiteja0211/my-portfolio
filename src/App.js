import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Experience from "./components/Experience";
import PageNavigator from "./components/PageNavigator";
import { Row, Col, Card, Affix } from "antd";
import "antd/dist/antd.css";

const App = () => {
  return (
    <div>
      <Row style={{ padding: "30px 0px", backgroundColor: "#ececec" }}>
        <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
        <Col xs={24} sm={24} md={20} lg={20} xl={20}>
          <Card
            style={{
              backgroundColor: "#292f39",
              color: "white",
              borderRadius: "10px",
              boxShadow: "0px 0px 7px #2d3e50",
            }}
          >
            <Layout />
          </Card>
        </Col>
        <Col xs={0} sm={0} md={2} lg={2} xl={2} style={{ paddingLeft: "10px" }}>
          <Affix offsetTop={10}>
            <PageNavigator />
          </Affix>
        </Col>
      </Row>

      <Row style={{ padding: "30px 0px", backgroundColor: "#ececec" }}>
        <Col md={{ span: 20, offset: 2 }}>
          <Card
            style={{
              // backgroundColor: "#292f39",
              color: "black",
              borderRadius: "10px",
              boxShadow: "0px 0px 7px #2d3e50",
            }}
          >
            <Experience />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
