import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import "../../../assets/css/main.css";

const About = () => {
  return (
    <>
      <section
        className="section section-components pb-0"
        id="section-components"
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              {/* <h2 className="mb-5">
                <span>About Us</span>
              </h2> */}
              <Container>
                <Row>
                  <Col style={{ minWidth: "350px" }}>
                    <img
                      alt="..."
                      className="img-fluid rounded"
                      src={require("../../../assets/img/contents/about us 2.jpg")}
                      style={{ minWidth: "100%", minHeight: "100%" }}
                    />
                  </Col>
                  <Col
                    className="mt-sm-0"
                    style={{ minWidth: "350px", minHeight: "435px" }}
                  >
                    <p className="text-center pt-5">
                      Thank you for considering our company as your software
                      solution provider. We offer a range of services including
                      web development, mobile app development, decentralized app
                      development, and graphic design. Our team is dedicated to
                      delivering high-quality products that meet the needs of
                      our clients. We take pride in turning complex ideas into
                      functional, user-friendly solutions. Our process starts
                      with understanding your business objectives and continues
                      through the entire development lifecycle. We strive to
                      provide customized solutions and ongoing support to ensure
                      the success of your project. Thank you for considering us.
                      We look forward to working with you.
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
