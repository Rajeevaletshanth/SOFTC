import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import socialMediaLink from "../../configs/socialmedia.json";
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Modal
} from "reactstrap";


const socialMedias = [
  {
    href: socialMediaLink.facebook,
    name: "Facebook",
    icon: "fa fa-facebook-square",
    tooltip: "Follow Us on Facebook"
  },
  {
    href: socialMediaLink.linkedin,
    name: "LinkedIn",
    icon: "fa fa-linkedin-square",
    tooltip: "Follow Us on LinkedIn"
  },
  {
    href: socialMediaLink.whatsapp,
    name: "Whatsapp",
    icon: "fa fa-whatsapp",
    tooltip: "Contact Us on Whatsapp"
  }
]


class DemoNavbar extends React.Component {
  state = {
    collapseClasses: "",
    collapseOpen: false,
    user: ""
  };

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();

    if (localStorage.getItem("user-info")) {
      this.setState({
        user: JSON.parse(localStorage.getItem("user-info")).username,
      });
    }
  }

  logout = () => {
    localStorage.removeItem("user-info");
    localStorage.removeItem("token");
    this.setState({user:""})
  }

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="Softc"
                  // style={{ width: "150px", height:"90px" }}
                  src={require("assets/img/softc_logos/logo-white-notag.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/softc_logos/logo.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Services</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="#"
                          // target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-spaceship" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Software Solution
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              The digitalization of our clients' businesses is
                              our primary business goal.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="#"
                          // target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-ui-04" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              IT Consulting Services
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Expert guidance and solutions for companies to optimize their technology systems.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="#"
                          // target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-palette" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-warning mb-md-1">
                              Graphics and designs
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                            Additional services for graphics and designs include branding, advertising, illustration, and animation
                            </p>
                          </Media>
                        </Media>
                        
                        
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">About</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/aboutus" tag={Link}>
                        About Us
                      </DropdownItem>
                      <DropdownItem to="/careers" tag={Link}>
                        Careers at SOFTC
                      </DropdownItem>
                      <DropdownItem to="/news" tag={Link}>
                        News
                      </DropdownItem>
                      <DropdownItem to="/events" tag={Link}>
                        Events
                      </DropdownItem>
                      <DropdownItem to="/merchants" tag={Link}>
                        Merchants
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  {socialMedias.map((item) => {
                    return[
                      <NavItem>
                        <NavLink
                          className="nav-link-icon"
                          href={`${item.href}`}
                          id={item.name}
                          target="_blank"
                        >
                          <i className={item.icon} />
                          <span className="nav-link-inner--text d-lg-none ml-2">
                            {item.name}
                          </span>
                        </NavLink>
                        <UncontrolledTooltip delay={0} target={item.name}>
                          {item.tooltip}
                        </UncontrolledTooltip>
                      </NavItem>
                    ]
                  })}
                  
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    {/* <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href={require("../../assets/app/softc-mobile-app.apk")} 
                      download="softc-android-app"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-android mr-2 text-purple" />
                      </span>
                      <span className="nav-link-inner--text ml-1 text-purple">
                        Download App
                      </span>
                    </Button> */}
                    {this.state.user && 
                     <><Button
                     block
                     className="btn-warning"
                     color="warning"
                     type="button"
                     onClick={() => this.toggleModal("notificationModal")}
                   >
                     <span className="btn-inner--icon">
                         <i className="fa fa-user mr-2 text-white" />
                        </span>
                        <span className="nav-link-inner--text ml-1 text-white">
                          {this.state.user}
                        </span>
                   </Button>
                   <Modal
                     className="modal-dialog-centered modal-danger"
                     contentClassName="bg-gradient-danger"
                     isOpen={this.state.notificationModal}
                     toggle={() => this.toggleModal("notificationModal")}
                   >
                     <div className="modal-header">
                       <h6 className="modal-title" id="modal-title-notification">
                         Your attention is required!
                       </h6>
                       <button
                         aria-label="Close"
                         className="close"
                         data-dismiss="modal"
                         type="button"
                         onClick={() => this.toggleModal("notificationModal")}
                       >
                         <span aria-hidden={true}>×</span>
                       </button>
                     </div>
                     <div className="modal-body">
                       <div className="py-3 text-center">
                         <i className="ni ni-bell-55 ni-3x" />
                         <h4 className="heading mt-4">Are you sure you want to log out?</h4>
                         <p>
                         Your unsaved changes will be lost.
                         </p>
                       </div>
                     </div>
                     <div className="modal-footer">
                       
                       <Button
                         className="text-white"
                         color="link"
                         data-dismiss="modal"
                         type="button"
                         onClick={() => this.toggleModal("notificationModal")}
                       >
                         Close
                       </Button>
                       <Button className="btn-white  ml-auto" color="default" type="button" onClick={this.logout}>
                         Logout
                       </Button>
                     </div>
                   </Modal></>
                    }

                    {!this.state.user && (
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="/login"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-sign-in mr-2 text-dark" />
                        </span>
                        <span className="nav-link-inner--text ml-1 text-dark">
                          Login
                        </span>
                      </Button>
                    )}
                    {!this.state.user && (
                      <Button
                        className="btn-default btn-icon bg-purple"
                        href="/register"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-check mr-2 text-white" />
                        </span>
                        <span className="nav-link-inner--text ml-1 text-white">
                          Register
                        </span>
                      </Button>
                    )}
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
