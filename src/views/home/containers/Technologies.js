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
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Badge,
} from "reactstrap";

const techArr = [
  {
    id: "react",
    href: "https://reactjs.org/",
    src: require("../../../assets/img/technologies/react.png"),
    tooltip: "React Js | React Native",
  },
  {
    id: "node",
    href: "https://nodejs.org/en/",
    src: require("../../../assets/img/technologies/node.png"),
    tooltip: "Node JS",
  },
  {
    id: "aws",
    href: "https://aws.amazon.com/",
    src: require("../../../assets/img/technologies/aws.png"),
    tooltip: "Amazon Web Services",
  },
  {
    id: "docker",
    href: "https://www.docker.com/",
    src: require("../../../assets/img/technologies/docker.png"),
    tooltip: "Docker",
  },
  {
    id: "tailwind",
    href: "https://tailwindcss.com/",
    src: require("../../../assets/img/technologies/tailwind.png"),
    tooltip: "Tailwind CSS",
  },
  {
    id: "bootstrap",
    href: "https://getbootstrap.com/",
    src: require("../../../assets/img/technologies/bootstrap.png"),
    tooltip: "Bootstrap",
  },
  {
    id: "javascript",
    href: "https://www.javascript.com/",
    src: require("../../../assets/img/technologies/javascript.png"),
    tooltip: "Javascript",
  },
  {
    id: "postgres",
    href: "https://www.postgresql.org/",
    src: require("../../../assets/img/technologies/postgres.png"),
    tooltip: "PostgreSQL",
  },
  {
    id: "solidity",
    href: "https://soliditylang.org/",
    src: require("../../../assets/img/technologies/solidity.png"),
    tooltip: "Solidity",
  },
  {
    id: "openai",
    href: "https://openai.com/",
    src: require("../../../assets/img/technologies/openai.png"),
    tooltip: "Open AI",
  },
  // {
  //   id: "photoshop",
  //   href: "https://www.adobe.com/",
  //   src: require("../../../assets/img/technologies/photoshop.png"),
  //   tooltip: "Adobe Photoshop",
  // },
  // {
  //   id: "ae",
  //   href: "https://www.adobe.com/",
  //   src: require("../../../assets/img/technologies/ae.png"),
  //   tooltip: "Adobe After Effects",
  // },
  // {
  //   id: "blender",
  //   href: "https://www.blender.org/",
  //   src: require("../../../assets/img/technologies/blender.png"),
  //   tooltip: "Blender",
  // },
];

class Technologies extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg bg-secondary">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/theme/promo-1.png")}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  {/* <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mb-5">
                    <i className="ni ni-ui-04" />
                  </div> */}
                  <h3>
                    <i className="ni ni-ui-04" /> Optimized Software
                  </h3>
                  <p className="mt-4">
                    Our team offers optimized software that runs efficiently
                    with fast performance. We use the latest techniques in code
                    optimization, memory management, and caching. Our software
                    is designed for scalability, security and easy to use for
                    any individual. We are committed to providing efficient and
                    effective solutions for your business. Trust us to take your
                    business to the next level with our optimized software.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="warning">
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">User-friendly interface</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="warning">
                            <i className="ni ni-settings-gear-65" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Scalability</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="warning">
                            <i className="ni ni-lock-circle-open" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Security</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
          {/* </section>
        <section className="section"> */}
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                {/* Available Technologies */}
                <div className="text-center">
                  <h4 className="mb-5 mt-5">
                    Technologies Powering Our Solutions
                  </h4>
                  <Row className="justify-content-center">
                    {techArr.map((item, key) => {
                      return [
                        <Col lg="2" xs="4">
                          <a href={item.href} id={item.id} target="_blank">
                            <img
                              alt="..."
                              className="img-fluid"
                              src={item.src}
                            />
                          </a>
                          <UncontrolledTooltip delay={0} target={item.id}>
                            {item.tooltip}
                          </UncontrolledTooltip>
                        </Col>,
                      ];
                    })}
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

export default Technologies;
