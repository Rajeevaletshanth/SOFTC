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
import React, { useState } from "react";
import "../../../assets/css/main.css";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import Particles from "../components/ReactParticles";
// import Modals from '../components/Modals'
// import Modals from "./Modals";
import DefaultModal from "../components/DefaultModal";
import VideoModal from "../components/VideoModal";

const Hero = () => {

  return (
    <>
      <div className="position-relative">
        {/* Hero for FREE version */}
        <section className="section section-hero  main-theme">
          <Particles />
          {/* Background circles */}
          <div className="shape shape-style-1 shape-dark  main-theme">
            <span className="span-150" />
            <span className="span-50" />
            <span className="span-50" />
            <span className="span-75" />
            <span className="span-100" />
            <span className="span-75" />
            <span className="span-50" />
            <span className="span-100" />
            <span className="span-50" />
            <span className="span-100" />
          </div>
          <Container className="shape-container d-flex align-items-center pt-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center " lg="8">

                  <img
                    alt="SOFTC Logo"
                    className="img-fluid"
                    // src={require("assets/img/brand/argon-react-white.png")}
                    src={require("assets/img/softc_logos/logo-white.png")}
                    style={{ width: "330px" }}
                  />
                  <p className="lead text-light  px-2 pt-2" style={{fontSize:"16px"}}>
                    {/* Unlock the potential of your business with our cutting-edge software technology */}
                    Experience our innovative software solutions to elevate your business to the next level.
                  </p>
                  
                
                  {/* <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-neutral btn-icon"
                        size="lg"
                        color="default"
                        href={require("../../../assets/app/softc-mobile-app.apk")} 
                        download="softc-android-app"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-android mr-2 text-purple" />
                        </span>
                        <span className="nav-link-inner--text ml-1 text-purple">
                          Download App                        
                        </span>
                      </Button>
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="https://github.com/SOFTC-Organization"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-github" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Star us</span>
                          on Github
                        </span>
                      </Button>
                    </div> */}

                  {/* <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *Developed by
                      </small>
                      <img
                        alt="..."
                        style={{ height: "25px" }}
                        src={require("assets/img/softc_logos/logo-white-notag.png")}
                      />
                    </div> */}
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
