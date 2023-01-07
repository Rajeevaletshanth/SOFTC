import React from "react";

// reactstrap components
import { Button, Container, Row, Col, CardImg, Card } from "reactstrap";
import "../../../assets/css/main.css";

const About = () => {
  return (
    <>
      <div className=" bg-secondary">
        <Container>
          <section
            className="section section-components pb-0"
            id="section-components"
          >
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h2 className="display-3  mb-5 text-center">
                    Meet the Team
                    <span className="text-warning display-4">
                      <b>About Us</b>
                    </span>
                  </h2>
                  
                  <Container className="mb-5">
                    <Row>
                      <Col style={{ minWidth: "50px" }} lg="7">
                        <Card className="card-lift--hover shadow border-0">
                          <img
                            alt="..."
                            className="img-fluid rounded shadow"
                            src={require("../../../assets/img/contents/about us.png")}
                            // style={{ minWidth: "100%", minHeight: "100%" }}
                          />
                        </Card>
                      </Col>
                      <Col
                        className="mt-sm-0"
                        style={{ minHeight: "350px" }}
                        lg="5"
                      >
                        <p className="text-center">
                          Our software solution and graphics design company
                          specializes in creating custom software applications
                          and eye-catching graphics for businesses of all sizes.
                          From website design and user experience optimization
                          to branding and marketing materials, we have the
                          skills and expertise to help our clients stand out in
                          their industry. We work closely with each client to
                          understand their unique needs and goals, and provide
                          personalized solutions to help them achieve success.
                          Whether you need a cloud-based system or an on-premise
                          solution, our team is ready to deliver top-quality
                          results.
                          {/* We offer a range of services including web development,
                      mobile app development, decentralized app development, and
                      graphic design. Our team is dedicated to delivering
                      high-quality products that meet the needs of our clients.
                      We take pride in turning complex ideas into functional,
                      user-friendly solutions. Our process starts with
                      understanding your business objectives and continues
                      through the entire development lifecycle. We strive to
                      provide customized solutions and ongoing support to ensure
                      the success of your project. Thank you for considering us.
                      We look forward to working with you. */}
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </section>
        </Container>
      </div>
    </>
  );
};

export default About;
