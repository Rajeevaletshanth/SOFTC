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
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { contactApi } from "../../../services/apiServices";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Modal
} from "reactstrap";

import {
  MdMarkEmailRead
} from 'react-icons/md'

class WorkWithUs extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    validName: true,
    validEmail: true,
    loading: false,
    responseMessage: { response: "", message: "" },
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  validateEmail = (value) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(value);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.email) {
      if (!this.state.name) this.setState({ validName: false });
      else this.setState({ validName: true });
      if (!this.state.email) this.setState({ validEmail: false });
      else this.setState({ validEmail: true });
    } else if (!this.validateEmail(this.state.email)) {
      this.setState({ validEmail: false });
    } else {
      this.setState({ loading: true });
      this.setState({ validName: true });
      this.setState({ validEmail: true });
      const data = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message,
      };
      const response = await contactApi(data);
      if (response.data) {
        this.setState({ loading: false });
        if (response.data.response === "success") {
          this.setState({
            responseMessage: {
              response: "success",
              message: response.data.message,
            },
          });
          this.toggleModal("notificationModal")
        } else {
          this.setState({
            responseMessage: {
              response: "danger",
              message: response.data.message,
            },
          });
        }
      }
    }
  };

  render() {
    return (
      <>
        <main ref="main">
          <section className="section bg-gradient-primary">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">
                    Want to work with us?
                  </h2>
                  <p className="lead text-white">
                    Looking for a reliable software development company? We
                    specialize in custom software development, from initial
                    concept to final product. Whether you need a web
                    application, mobile app or any other software, we can help.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Building tools</h5>
                  <p className="text-white mt-3">
                    Revolutionize your construction process with our
                    cutting-edge tools that optimize efficiency and
                    productivity.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Grow your market</h5>
                  <p className="text-white mt-3">
                    Expand your reach and grow your market share with our expert
                    market expansion strategies.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Launch time</h5>
                  <p className="text-white mt-3">
                    We provide comprehensive product launch services to ensure a
                    successful launch on time and on budget.
                  </p>
                </Col>
              </Row>
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
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Please drop your contact details here.
                      </p>
                      {this.state.responseMessage.response && (
                        <div
                          className={`alert alert-${this.state.responseMessage.response} alert-dismissible fade show`}
                          role="alert"
                        >
                          {this.state.responseMessage.message}
                        </div>
                      )}
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            maxlength="30"
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                            onChange={(e) =>
                              this.setState({ name: e.target.value })
                            }
                          />
                        </InputGroup>
                        {!this.state.validName && (
                          <small className="text-danger">* Name Required</small>
                        )}
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            maxlength="50"
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                          />
                        </InputGroup>
                        {!this.state.validEmail ? (
                          !this.state.email.length > 0 ? (
                            <small className="text-danger">
                              * Email Required
                            </small>
                          ) : (
                            <small className="text-danger">
                              * Invalid email
                            </small>
                          )
                        ) : (
                          <></>
                        )}
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.phoneFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-mobile-button" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Phone No (Optional)"
                            type="text"
                            maxlength="12"
                            onFocus={(e) =>
                              this.setState({ phoneFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ phoneFocused: false })
                            }
                            onChange={(e) =>
                              this.setState({ phone: e.target.value })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          maxlength="500"
                          type="textarea"
                          onChange={(e) =>
                            this.setState({ message: e.target.value })
                          }
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round bg-warning text-white"
                          // color="primary"
                          size="lg"
                          type="button"
                          onClick={this.handleSubmit}
                          disabled={this.state.loading ? true : false}
                        >
                          {this.state.loading && (
                            <span
                              class="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          )}
                          {this.state.loading ? " Sending..." : "Send Message"}
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            <Modal
              className="modal-dialog-centered modal-success"
              contentClassName="bg-gradient-success"
              isOpen={this.state.notificationModal}
              toggle={() => this.toggleModal("notificationModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification" style={{fontSize:"13px"}}>
                  Email Received
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
                  {/* <i className="ni ni-check-bold ni-5x" /> */}
                  <MdMarkEmailRead size={100}/>
                  <h5 className="heading mt-4">
                    We have received your information and will be in touch with you shortly.
                  </h5>
                  <p style={{fontSize:"11px"}}>A confirmation email has been sent to the email address provided.</p>
                </div>
              </div>
            </Modal>
          </section>
        </main>
      </>
    );
  }
}

export default WorkWithUs;
