import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import TestDomeCertificate from "../components/TestDomeCertificate";
import ProjectCard from "../components/Projects/ProjectCard";
import certificates from "../assets/certificates.json";
import projects from "../assets/projects.json";
import cert1 from "../assets/cert/certificate1.pdf";
import cert2 from "../assets/cert/certificate1.pdf";
import cert3 from "../assets/cert/certificate1.pdf";
import Iframe from 'react-iframe';

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />

      {/* Certificates Section */}
      <Container>
        <Row>
          <h1 className="project-heading">
            <strong className="yellow">Certificates Earned</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few certificates I’ve earned so far.
          </p>
        </Row>

        <Row>
          <Col md={4}>
            <Iframe
              title="cert1"
              src={cert1}
              width="100%"
              height={400}
            />
          </Col>
          <Col md={4}>
            <Iframe
              title="cert2"
              src={cert2}
              width="100%"
              height={400}
            />
          </Col>
          <Col md={4}>
            <Iframe
              title="cert3"
              src={cert3}
              width="100%"
              height={400}
            />
          </Col>
          {certificates.data.map((certificate, idx) => (
            <Col
              key={`certificat-test-dom-${idx}`}
              md={3}
              className="project-card"
            >
              <TestDomeCertificate
                skill={certificate.skill}
                url={certificate.url}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Projects Section */}
      <Container style={{ marginTop: '60px' }}>
        <Row>
          <h1 className="project-heading">
            <strong className="yellow">My Projects</strong>
          </h1>
          <p style={{ color: "white" }}>
            A selection of projects I’ve worked on recently.
          </p>
        </Row>

        <Row>
          {projects.map((project) => (
            <Col key={project.id} md={4} className="project-card">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
