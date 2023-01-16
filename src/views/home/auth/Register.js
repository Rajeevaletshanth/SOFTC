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
import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useHistory } from "react-router-dom";
// core components
// import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import { registerApi } from "../../../services/authServices";

const Register = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [valid, setValid] = useState(true);
  const [validEmail, setValidEmail] = useState(true);

  const [message, setMessage] = useState({ response: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("token")){
      history.push('/')
    }
  },[])

  const validateEmail = (value) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(value);
  };

  const register = async () => {
    const data = {
      username: name,
      authority: { role: ["user"] },
      email: email,
      password: password,
    };
    setLoading(true);
    const response = await registerApi(data);
    if (response.data) {
      if (response.data.response === "success") {
        setMessage({
          response: "success",
          message: "Successfully Registered. Please Login to continue.",
        });
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      } else {
        setMessage({ response: "danger", message: response.data.message });
      }
      setLoading(false);
    } else {
      setLoading(false);
      setMessage({ response: "danger", message: "404 Error" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && name.length >= 3 && password.length >= 3) {
      if (validateEmail(email)) {
        setValidEmail(true);
        register();
      } else {
        setValidEmail(false);
      }
    } else {
      setValid(false);
    }
  };

  return (
    <>
      {/* <DemoNavbar /> */}
      <main>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-primary">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  {/* <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign up with</small>
                      </div>
                      <div className="text-center">
                        <Button
                          className="btn-neutral btn-icon mr-4"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={
                                require("assets/img/icons/common/github.svg")
                                  .default
                              }
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={
                                require("assets/img/icons/common/google.svg")
                                  .default
                              }
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader> */}
                    
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <b>Register</b>
                    </div>
                    {message.response && <div className={`alert alert-${message.response} alert-dismissible fade show`} role="alert">
                      {message.message}
                    </div>}
                    <Form role="form">
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Name"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </InputGroup>
                        {!valid ? (
                          !name ? (
                            <small className="text-danger">* Required</small>
                          ) : name.length < 3 ? (
                            <small className="text-danger">
                              * Min 3 characters
                            </small>
                          ) : (
                            <></>
                          )
                        ) : (
                          <></>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </InputGroup>
                        {!valid ? (
                          !email ? (
                            <small className="text-danger">* Required</small>
                          ) : !validEmail ? (
                            <small className="text-danger">
                              * Invalid Email
                            </small>
                          ) : (
                            <></>
                          )
                        ) : (
                          <></>
                        )}
                        {/* <small className="text-danger">*Required</small> */}
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            maxlength="25"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </InputGroup>
                        {!valid ? (
                          !password ? (
                            <small className="text-danger">* Required</small>
                          ) : password.length < 3 ? (
                            <small className="text-danger">
                              * Min 3 characters
                            </small>
                          ) : (
                            <></>
                          )
                        ) : (
                          <></>
                        )}
                      </FormGroup>
                      <div className="text-muted font-italic">
                        <small>
                          password strength:{" "}
                          <span
                            className={`font-weight-700 ${
                              password.length > 15
                                ? "text-success"
                                : password.length > 8
                                ? "text-warning"
                                : "text-danger"
                            }`}
                          >
                            {password.length > 15
                              ? "strong"
                              : password.length > 8
                              ? "average"
                              : "weak"}
                          </span>
                        </small>
                      </div>
                      <Row className="my-4">
                        <Col xs="12">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="customCheckRegister"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckRegister"
                            >
                              <span>
                                I agree with the{" "}
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Privacy Policy
                                </a>
                              </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <button class="btn btn-primary" type="button" onClick={handleSubmit} disabled={loading?true:false}>
                          {loading && <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>}
                          {loading? " Creating..." : "Create account"} 
                        </button>             
                      </div>
                      <div className="text-center mt-3">
                        <Button href="/login">Sign In</Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default Register;
