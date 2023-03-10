import React, {useState, useEffect} from "react";

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
import { UncontrolledAlert } from "reactstrap";

import SimpleFooter from "components/Footers/SimpleFooter.js";
// import CardsFooter from "components/Footers/CardsFooter";
import { loginApi } from "../../../services/authServices";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const [message, setMessage] = useState({ response: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("token")){
      history.push('/')
    }
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      email:email,
      password:password,
      signedIn: true
    }
    setLoading(true)
    const response = await loginApi(data)
    if(response.data){
      setLoading(false)
      if(response.data.isLoggedIn){
        localStorage.setItem("user-info", JSON.stringify(response.data.user))
        localStorage.setItem("token", response.data.token)
        // console.log(response.data)
        history.push("/");
      }else{
        setMessage({ response: "danger", message: response.data.message });
      }
    }
    setTimeout(() => {
      setMessage({ response: "warning", message: "Timeout, Please try again later!" });
      setLoading(false)
    }, 30000)
  }

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
                      <small>Sign in with</small>
                    </div>
                    <div className="btn-wrapper text-center">
                      <Button
                        className="btn-neutral btn-icon"
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
                      <b>Login</b>
                    </div>
                    {message.response && <div className={`alert alert-${message.response} alert-dismissible fade show`} role="alert">
                      {message.message}
                    </div>}
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                        </InputGroup>
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
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span>Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        {/* <Button className="my-4" color="primary" type="button" onClick={handleSubmit}>
                          Sign in
                        </Button> */}
                        <button class="btn btn-primary mt-4" type="button" onClick={handleSubmit} disabled={loading?true:false}>
                          {loading && <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>}
                          {loading? "Signing In..." : "Sign In"} 
                        </button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <Row className="mt-3">
                  <Col xs="6">
                    <a
                      className="text-light"
                      href="/forgot-password"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Forgot password?</small>
                    </a>
                  </Col>
                  <Col className="text-right" xs="6">
                    <a
                      className="text-light"
                      href="/register"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <small>Create new account</small>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default Login;
