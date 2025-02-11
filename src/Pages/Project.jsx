import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Project.css";
import BodyContent from "../Components/BodyContent/BodyContent";
import HeaderContent from "../Components/HeaderContent/HeaderContent";
import ManPower from "../assets/Images/ManPower.png";
import Vehicle from "../assets/Images/vehicle.jpg";
import ITPage from "../assets/Images/ITPage.jpg";
import Budget from "../assets/Images/budget.jfif";
import Movie from "../assets/Images/movie.png"

function Project() {
  const projectData = [
    {
      title: "Man Power Service Web Software",
      description:
        "This group project involved designing the interface using Figma and developing it with HTML and CSS. User and employee registration data is stored in a MySQL database using PHP. The system includes a search feature that filters and displays employees by category.",
      image: ManPower,
    },
    {
      title: "Vehicle Service Center Management System",
      description:
        "This project was a group project using Android Studio and Firebase, which involves adding vehicles, vehicle issues, selecting services, calculating the total amount, and generating bills for services.",
      image: Vehicle,
    },
    {
      title: "BroTecPro Website",
      description:
        "A simple and intuitive website built with HTML and CSS, designed to educate users about key concepts and trends in information and technology, offering valuable insights in an accessible and user-friendly format.",
      image: ITPage,
    },
    {
      title: "Budget Management App",
      description:
        "Developed a budget tracking application using React and Bootstrap, implementing features such as adding budgets, tracking expenses, total budget summary, and expense management (view/edit/delete). Utilized custom context and custom hooks for efficient state management and scalability.",
      image: Budget,
    },
    {
      title: "Movie Web Site",
      description:
        "Movie website is a React-based application that integrates the OMDB API to provide a seamless movie search experience. Users can search for movies by name, and the site displays the movie title, release year, and poster dynamically.",
      image: Movie,
    },
  ];

  return (
    <>
      <HeaderContent />
      <BodyContent>
        <Container fluid className="mt-5 px-4">
          <h1 className="text-center text-primary mb-5">My Projects</h1>
          <Row className="justify-content-center">
            {projectData.map((project, index) => (
              <Col xs={12} md={6} lg={4} key={index} className="mb-4 d-flex">
                <Card className="project-card shadow-lg flex-grow-1">
                  <div className="card-image-container">
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>
                  <Card.Body className="text-center d-flex flex-column">
                    <Card.Title className="project-title">
                      {project.title}
                    </Card.Title>
                    <br/>
                    <Card.Text className="project-description flex-grow-1">
                      {project.description}
                    </Card.Text>
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

export default Project;
