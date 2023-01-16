
import React from "react";
import { Link } from "react-router-dom";
import socialMediaLink from "../../configs/socialmedia.json"
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

const footerContent = [
  {
    link: "/services",
    alt: "Our Services",
    src: require("assets/img/advertisements/our services.jpg")
  },
  {
    link: "/infrastructure",
    alt: "Our Infrastructure",
    src: require("assets/img/advertisements/our infrastructure.jpg")
  },
  {
    link: "/events",
    alt: "New Events",
    src: require("assets/img/advertisements/new events 2.jpg")
  },
]

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards" id="joinus">
          <Container className="container-sm">
            <Row>
              {footerContent.map((item) => {
                return[
                  <Col className="mb-5 mb-md-0" md="4">
                    <Card className="card-lift--hover shadow border-0">
                      {/* <Link to={item.link}> */}
                        <CardImg
                          alt={item.alt}
                          src={item.src}
                        />
                      {/* </Link> */}
                    </Card>
                  </Col>
                ]
              })}
            </Row>
          </Container>
          <Container>
            <Row className="row-grid align-items-center my-md">
            <Col lg="6">
                <h6><img src={require("../../assets/img/softc_logos/logo.png")} alt="" width={180} /></h6>
                <div style={{fontSize:"13px"}}>
                SOFTC is a software development firm that offers custom solutions and IT consulting. Expert team delivers solutions to optimize business operations and achieve goals.                </div>
              </Col>
              <Col lg="4">
                <h6>Contact</h6>
                <div style={{fontSize:"13px"}}>
                  <i className="ni ni-building" />&nbsp;&nbsp; 8/1, Thalvupadu Road, Mannar <br/>
                  <i className="ni ni-email-83" />&nbsp;&nbsp; getsoftc@outlook.com <br/>
                  <i className="ni ni-mobile-button" />&nbsp;&nbsp; +94768021017 <br/>
                </div>
              </Col>
              <Col lg="2">
                <h6>Follow Us</h6>
                <div style={{fontSize:"13px"}}>
                  <a href={`${socialMediaLink.facebook}`}><i className="fa fa-facebook" />&nbsp;&nbsp; Facebook</a> <br/>
                  <a href={`${socialMediaLink.linkedin}`}><i className="fa fa-linkedin" />&nbsp;&nbsp; LinkedIn</a> <br/>
                  <a href={`${socialMediaLink.whatsapp}`}><i className="fa fa-whatsapp" />&nbsp;&nbsp; Whatsapp</a> <br/>              
                </div>
              </Col>
              {/* <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  Thank you for supporting us!
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href={`${socialMediaLink.twitter}`}
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href={`${socialMediaLink.facebook}`}
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="dribbble"
                  href={`${socialMediaLink.dribble}`}
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-dribbble" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href={`${socialMediaLink.github}`}
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col> */}
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="12" className="text-center">
                <div className="copyright">
                  Copyright © {new Date().getFullYear()}{" "}All rights reserved by{" "}
                  <a
                    href={`${socialMediaLink.softc}`}
                    target="_blank"
                  >
                    SOFTC
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
