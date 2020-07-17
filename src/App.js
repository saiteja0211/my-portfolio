import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Row, Col, Card } from "antd";
import 'antd/dist/antd.css';


export default class App extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <div >
        <Row style={{ padding: "30px 0px", backgroundColor: "#ececec" }}>
          <Col md={{ span: 20, offset: 2 }}>
            <Card
              style={{ backgroundColor: "#292f39", color: "white", borderRadius: "10px", boxShadow: "0px 0px 7px #2d3e50" }}
            >
              <Layout />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
