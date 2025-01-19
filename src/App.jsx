import { useState } from "react";
import "./App.css";
import BodyContent from "./Components/BodyContent/BodyContent";
import HeaderContent from "./Components/HeaderContent/HeaderContent";
import { Container, Row, Col, Button } from "react-bootstrap";
import KalanaImage from "./assets/images/Kalana.jpg"; 
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderContent />
      <BodyContent>
        {/* Full-width container */}
        <Container
          fluid
          className="text-center"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "0",
            width: "100vw",
          }}
        >
          <Row
            className="align-items-center"
            style={{
              minHeight: "100vh", // Full height of the viewport
            }}
          >
            <Col lg={6}>
              <h1
                style={{
                  fontSize: "4rem", // Increase font size
                  fontWeight: "bold", // Optional: Make heading bold
                }}
              >
                Hello, I'm <br/> <span className="text-primary">Kalana</span>
              </h1>
              <p className="text-muted">FRONT-END DEVELOPER</p>
              <div className="mt-4">
              <Link to="/project">
                <Button variant="primary" className="me-3">
                  My Work
                </Button>
                </Link>
                <Link to="/contact">
                <Button variant="outline-primary">Hire Me</Button>
                </Link>
              </div>
            </Col>
            <Col
              lg={6}
              className="d-flex align-items-center" // Align vertically only
              style={{ minHeight: "100%" }}
            >
              <img
                src={KalanaImage} // Use the imported image
                alt="Kalana"
                className="img-fluid"
                style={{
                  height: "100%", // Increased image height (adjust as needed)
                  width: "auto", // Maintain aspect ratio
                  objectFit: "contain", // Ensure it fits nicely
                  marginLeft: "0", // Align image to the left
                }}
              />
            </Col>
          </Row>
        </Container>
      </BodyContent>
    </>
  );
}

export default App;
