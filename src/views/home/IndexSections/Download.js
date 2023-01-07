/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  Do you love this awesome{" "}
                  <span className="text-success">
                    Design System for Bootstrap 4?
                  </span>
                </h2>
                <p className="lead">
                  Ready to take your software development career to the next
                  level? Our startup is looking for experienced developers to
                  join our fast-paced and innovative team. You'll have the
                  opportunity to work on challenging projects using the latest
                  technologies and make a meaningful impact. We offer a
                  competitive salary, flexible work environment, and
                  opportunities for professional development and advancement. If
                  you're excited to be a part of a dynamic startup, apply now!
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="mb-3 mb-sm-0"
                    color="default"
                    href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                  >
                    Join Us Now
                  </Button>
                </div>

                {/* Available Technologies */}
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Available on these Technologies
                  </h4>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a href="https://reactjs.org/" id="react" target="_blank">
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("../../../assets/img/technologies/react.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="react">
                        React Js | React Native
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://nodejs.org/en/"
                        id="node"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("../../../assets/img/technologies/node.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="node">
                        Node Js
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://aws.amazon.com/"
                        id="aws"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("../../../assets/img/technologies/aws.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="aws">
                        Amazon Web Services
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.docker.com/"
                        id="docker"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("../../../assets/img/technologies/docker.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="docker">
                        Docker
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://tailwindcss.com/"
                        id="tailwind"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("../../../assets/img/technologies/tailwind.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tailwind">
                        Tailwind CSS
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://getbootstrap.com/"
                        id="bootstrap"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("../../../assets/img/technologies/bootstrap.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="bootstrap">
                        Bootstrap
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.javascript.com/"
                        id="javascript"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("../../../assets/img/technologies/javascript.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="javascript">
                        Javascript
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.postgresql.org/"
                        id="pgsql"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("../../../assets/img/technologies/postgres.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="pgsql">
                        PostgreSQL
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://soliditylang.org/"
                        id="solidity"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("../../../assets/img/technologies/solidity.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="solidity">
                        Solidity
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.adobe.com/"
                        id="photoshop"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("../../../assets/img/technologies/photoshop.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="photoshop">
                        Adobe Photoshop
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.adobe.com/"
                        id="aftereffects"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("../../../assets/img/technologies/ae.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="aftereffects">
                        Adobe After Effects
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.blender.org/"
                        id="blender"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("../../../assets/img/technologies/blender.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="blender">
                        Blender
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
