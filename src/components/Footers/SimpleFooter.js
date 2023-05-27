/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import socialMediaLink from "../../configs/socialmedia.json";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer bg-white">
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="5">
                <h6><img src={require("../../assets/img/softc_logos/logo.png")} alt="" width={180} /></h6>
                <div style={{fontSize:"13px"}}>
                SOFTC is a software development firm that offers custom solutions and IT consulting. Expert team delivers solutions to optimize business operations and achieve goals.                </div>
              </Col>
              <Col lg="4" className="text-left">
                <h6>Contact</h6>
                <div style={{fontSize:"13px"}}>
                  <i className="ni ni-building" />&nbsp;&nbsp; 8/1, Thalvupadu Road, Mannar <br/>
                  <i className="ni ni-email-83" />&nbsp;&nbsp; getsoftc@outlook.com <br/>
                  <i className="ni ni-mobile-button" />&nbsp;&nbsp; +94768021017 <br/>
                </div>
              </Col>
              <Col lg="3">
                <h6>Follow Us</h6>
                <div style={{fontSize:"13px"}}>
                  <a href={`${socialMediaLink.facebook}`}><i className="fa fa-facebook" />&nbsp;&nbsp; Facebook</a> <br/>
                  <a href={`${socialMediaLink.linkedin}`}><i className="fa fa-linkedin" />&nbsp;&nbsp; LinkedIn</a> <br/>
                  <a href={`${socialMediaLink.whatsapp}`}><i className="fa fa-whatsapp" />&nbsp;&nbsp; Whatsapp</a> <br/>                 
                </div>
              </Col>

    {/* <div class="container text-center text-md-start mt-5">

      <div class="row mt-3">

        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-1">

          <h6 class="text-uppercase fw-bold mb-2">Contact</h6>
          <p><i class="fas fa-home me-1"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-1"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-1"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-1"></i> + 01 234 567 89</p>
        </div>

      </div>

    </div> */}


              {/* <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for supporting us!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href=""
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
                  href=""
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
                  href=""
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
                  href=""
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
            <Row className=" align-items-center justify-content-md-between">
              <Col md="12" className="text-center">
                <div className=" copyright">
                  Copyright © {new Date().getFullYear()}.{" "}All rights reserved by{" "}
                  <a
                    href=""
                    target="_blank"
                  >
                    SOFTC
                  </a>
                  .
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
