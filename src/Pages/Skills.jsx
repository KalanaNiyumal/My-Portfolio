import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Skills.css";
import BodyContent from "../Components/BodyContent/BodyContent";
import HeaderContent from "../Components/HeaderContent/HeaderContent";

function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [{ name: "Java" }, { name: "C#" }],
    },
    {
      category: "Web Development",
      skills: [
        { name: "React" },
        { name: "HTML & CSS" },
        { name: "Bootstrap" },
        { name: "Material UI" },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub" },
        { name: "Figma" },
        { name: "VS Code" },
        { name: "Visual Studio" },
        { name: "NetBeans" },
        { name: "WAMPP" },
      ],
    },
    {
      category: "Database",
      skills: [{ name: "MySQL" }],
    },
  ];

  return (
    <>
      <HeaderContent />
      <BodyContent>
        <Container fluid className="skills-container mt-5 px-4">
          <h1 className="text-center text-primary mb-5">My Skills</h1>
          <Row className="justify-content-center">
            {skillCategories.map((category, index) => (
              <Col xs={12} sm={6} md={6} lg={3} key={index} className="mb-4 d-flex">
                <Card className="shadow-lg skill-card flex-fill">
                  <Card.Body>
                    <Card.Title className="text-center mb-4 text-secondary">
                      {category.category}
                    </Card.Title>
                    <ul className="skills-list">
                      {category.skills.map((skill, idx) => (
                        <li key={idx} className="skill-item">
                          <span className="skill-icon">✔️</span> {skill.name}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </BodyContent>
    </>
  );
}

export default Skills;
