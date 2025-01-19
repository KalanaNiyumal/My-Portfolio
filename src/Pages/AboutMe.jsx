import React from "react";
import BodyContent from "../Components/BodyContent/BodyContent";
import HeaderContent from "../Components/HeaderContent/HeaderContent";
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { FaGraduationCap, FaLaptopCode, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './AboutMe.css'; 
import codingImage from '../assets/Images/coding.png'; // Your image path

function AboutMe() {
  return (
    <>
      <HeaderContent />
      <BodyContent>
        <Container className="mt-5">
          <h1 className="text-primary text-justify mb-4 ">About Me</h1>
          <p className="text-justify text-muted mb-5">
            Hello! I'm Kalana, a passionate frontend developer with a keen interest in web development. I 
            enjoy building responsive and user-friendly applications that make a positive impact.
          </p>

          <Row className="justify-content-start">
            <Col md={10} lg={8}> {/* Increased column size */}
              <Card className="shadow-lg custom-card-width">
                <Card.Body>
                  <Card.Title className="text-left mb-4">Main Education</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted text-left">
                    <FaGraduationCap /> O/L Education
                  </Card.Subtitle>
                  <Card.Text className="mb-4 text-left">
                    I completed my O/L examination in 2016, achieving strong results across a range of subjects. 
                    I received 6 A passes in Mathematics, ICT, Business & Accounting Studies, Music, History, 
                    and Buddhism. I also obtained 3 B passes in Science, English, and Sinhala.
                  </Card.Text>

                  <Card.Subtitle className="mb-2 text-muted text-left">
                    <FaGraduationCap /> A/L Education
                  </Card.Subtitle>
                  <Card.Text className="mb-4 text-left">
                    In 2020, I completed my A/L examination in the mathematics stream, where I earned 2 C passes 
                    in Combined Mathematics and 1 S pass in Chemistry.
                  </Card.Text>

                  <Card.Title className="text-left mb-4">Higher Education</Card.Title>

                  <Card.Subtitle className="mb-2 text-muted text-left">
                    <FaLaptopCode /> Higher Diploma In Computing And Software Engineering
                  </Card.Subtitle>
                  <Card.Text className="mb-4 text-left">
                    I am currently pursuing a Higher Diploma in Computing and Software Engineering at Cardiff 
                    Metropolitan University (CMU) through ICBT Campus in Matara, from 2022 to 2024. This program 
                    is giving me advanced knowledge in software development, algorithms, and computer systems.
                  </Card.Text>

                  <Card.Subtitle className="mb-2 text-muted text-left">
                    <FaLaptopCode /> Higher National Diploma in Information Technology (HNDIT)
                  </Card.Subtitle>
                  <Card.Text className="mb-4 text-left">
                    I am currently enrolled in the HNDIT program at the Sri Lanka Institute of Advanced Technological 
                    Education in Galle, from 2022 to the present. It complements my knowledge in IT infrastructure, 
                    programming, and system development.
                  </Card.Text>

                  <Card.Subtitle className="mb-2 text-muted text-left">
                    <FaLaptopCode /> Pearson Assured Diploma in Information Technology (DiTEC)
                  </Card.Subtitle>
                  <Card.Text className="mb-4 text-left">
                    I completed DiTEC at ESOFT Campus in Matara from 2021 to 2022, gaining a strong foundation in IT 
                    principles, software development, and network management.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Right-side Image */}
            <Col md={4} lg={4}>
              <Card className="shadow-lg custom-card-width">
                <Card.Body className="text-left">
                  <img
                    src={codingImage}
                    alt="Coding Illustration"
                    className="img-fluid rounded"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          
        </Container>
      </BodyContent>
    </>
  );
}

export default AboutMe;
