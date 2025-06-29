import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiVisualstudio,   // <-- use this from devicons
} from "react-icons/di";
import {
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import AOS from "aos";

const Toolstack = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in">
        <SiHeroku />
      </Col>
    </Row>
  );
};

export default Toolstack;
