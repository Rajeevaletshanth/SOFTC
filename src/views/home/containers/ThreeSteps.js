import React from "react";
import classnames from "classnames";
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import { HiOutlineCheck } from "react-icons/hi";
import { MdDashboardCustomize } from "react-icons/md";
import { FaRecycle } from "react-icons/fa";
import "../../../assets/css/main.css";

import {
  HiVolumeOff,
  HiVolumeUp
} from 'react-icons/hi'

class ThreeSteps extends React.Component {
  componentDidMount() {
    document.getElementById("myVideo").play();
    // document.getElementById("myVideo").requestFullscreen();
  }

  state = {
    iconTabs: 1,
    plainTabs: 1,
    muted: true
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
  render() {
    return (
      <>
        <section className="section">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="12">
                {/* Tabs with icons */}
                <div className="">
                  <small className=" font-weight-bold">
                    <a href="#learnmore"><span className="text-warning mr-1">Learn more</span></a> more
                    about SOFTC's unique features
                  </small>
                </div>
                <div className="display-3 mb-3">
                  <small className="text-uppercase font-weight-bold">
                    Discover how we work to deliver outstanding results
                  </small>
                </div>
                <div className="nav-wrapper">
                  <Nav
                    className="nav-fill flex-column flex-md-row "
                    id="tabs-icons-text"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.iconTabs === 1}
                        className={classnames(
                          "mb-sm-3 mb-md-0",
                          {
                            active: this.state.iconTabs === 1,
                          },
                          this.state.iconTabs === 1
                            ? "bg-purple"
                            : "text-purple"
                        )}
                        onClick={(e) => this.toggleNavs(e, "iconTabs", 1)}
                        href="#pablo"
                        role="tab"
                      >
                        <b>
                          <HiOutlineCheck className="mr-2" />
                          Understand
                        </b>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.iconTabs === 2}
                        className={classnames(
                          "mb-sm-3 mb-md-0",
                          {
                            active: this.state.iconTabs === 2,
                          },
                          this.state.iconTabs === 2
                            ? "bg-purple"
                            : "text-purple"
                        )}
                        onClick={(e) => this.toggleNavs(e, "iconTabs", 2)}
                        href="#pablo"
                        role="tab"
                      >
                        <b>
                          <MdDashboardCustomize className="mr-2" />
                          Develop
                        </b>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.iconTabs === 3}
                        className={classnames(
                          "mb-sm-3 mb-md-0",
                          {
                            active: this.state.iconTabs === 3,
                          },
                          this.state.iconTabs === 3
                            ? "bg-purple"
                            : "text-purple"
                        )}
                        onClick={(e) => this.toggleNavs(e, "iconTabs", 3)}
                        href="#pablo"
                        role="tab"
                      >
                        <b>
                          <FaRecycle className="mr-2" />
                          Test & Iterate
                        </b>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <Card className="border-0">
                  <CardBody>
                    <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                      {/* Step 1 */}
                      <TabPane tabId="iconTabs1">
                        <h4 className="text-purple">
                          <b>Step 1 :</b> Understanding Our Clients' Needs
                        </h4>
                        <p>
                          <li>
                            We begin every project by thoroughly understanding
                            our clients' needs, goals, and target audience.
                          </li>
                          <li>
                            We take the time to ask questions, gather
                            information, and conduct research to ensure that we
                            have a clear understanding of what our clients are
                            looking to achieve.
                          </li>
                        </p>
                      </TabPane>
                      {/* Step 2 */}
                      <TabPane tabId="iconTabs2">
                        <h4 className="text-purple">
                          <b>Step 2 :</b> Developing a Customized Solution
                        </h4>
                        <p>
                          <li>
                          Based on our understanding of our clients' needs, we develop a customized solution that is tailored specifically to their requirements.
                          </li>
                          <li>
                          We use industry-leading technologies and best practices to ensure that our solutions are reliable, scalable, and user-friendly.
                          </li>
                        </p>
                      </TabPane>
                      {/* Step 3 */}
                      <TabPane tabId="iconTabs3">
                        <h4 className="text-purple">
                          <b>Step 3 :</b> Testing and Iteration
                        </h4>
                        <p>
                          <li>
                          Before we deliver our solution to our clients, we thoroughly test it to ensure that it meets their needs and exceeds their expectations.
                          </li>
                          <li>
                          We also take a collaborative approach to development, working closely with our clients to make any necessary adjustments or improvements based on their feedback.
                          </li>
                        </p>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <div>
              <video id="myVideo" src={require('../../../assets/videos/softc intro - music.mp4')} style={{cursor:"pointer"}}  width="100%" height="100%" autoplay loop muted={this.state.muted?true:false}></video>
              <Button className="float-right mute-button" style={{position:"relative", bottom:"45px", right:"10px", zIndex:0, opacity:"90%"}} color="white" size="sm" onClick={(e) => this.setState({muted: !this.state.muted})}> {this.state.muted? <><HiVolumeUp /> Unmute</> : <><HiVolumeOff /> Mute</> } </Button>
              </div>
              </Col>
            </Row>        
          </Container>
          
        </section>
      </>
    );
  }
}

export default ThreeSteps;
