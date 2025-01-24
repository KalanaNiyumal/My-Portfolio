import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa"; // Importing icons
import "./Contact.css";
import BodyContent from "../Components/BodyContent/BodyContent";
import HeaderContent from "../Components/HeaderContent/HeaderContent";

function Contact() {
  return (
    <>
      <HeaderContent />
      <BodyContent>
        <Container fluid className="contact-container mt-5 px-3 px-md-4">
          <h1 className="text-center text-primary mb-4">Contact Details</h1>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <Card className="shadow-lg contact-card">
                <Card.Body>
                  <div className="contact-info">
                    <h5 className="text-center text-primary mb-4">Let's Connect</h5>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="d-flex align-items-center">
                        <FaPhone size={20} className="icon-style" />
                        <span className="contact-detail">+94 70 504 2514</span>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <FaEnvelope size={20} className="icon-style" />
                        <span className="contact-detail">shkniyumal@gmail.com</span>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <FaWhatsapp size={20} className="icon-style" />
                        <a
                          href="https://wa.me/+123456789"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link"
                        >
                          WhatsApp: +94 70 504 2514
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <FaLinkedin size={20} className="icon-style" />
                        <a
                          href="https://www.linkedin.com/in/kalana-niyumal-18122a31b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link"
                        >
                          Kalana Niyumal
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <FaGithub size={20} className="icon-style" />
                        <a
                          href="https://github.com/KalanaNiyumal"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link"
                        >
                          Kalana Niyumal
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </BodyContent>
    </>
  );
}

export default Contact;
