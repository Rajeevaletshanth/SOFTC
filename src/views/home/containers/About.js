/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("../../../assets/img/contents/technology.jpg"),
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("../../../assets/img/contents/programming.jpg"),
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("../../../assets/img/contents/design.jpg"),
    altText: "Slide 3",
    caption: "",
  },
];

export default function JavaScript() {
  const [demoModal, setDemoModal] = React.useState(false);
  const [miniModal, setMiniModal] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className=" section-secondary" id="aboutus">
      <div className="section">
        <Container>
          {/* <div className="title">
            <h3>Meet the Team</h3>
          </div> */}
          <Row className="justify-content-between align-items-center">
            <Col className="mb-2 mb-lg-0" lg="5">
              <h2 className="font-weight-light"><b>About Us</b></h2>
              <p className="mt-4">
                Our software solution and graphics design company specializes in
                creating custom software applications and eye-catching graphics
                for businesses of all sizes. From website design and user
                experience optimization to branding and marketing materials, we
                have the skills and expertise to help our clients stand out in
                their industry. We work closely with each client to understand
                their unique needs and goals, and provide personalized solutions
                to help them achieve success. Whether you need a cloud-based
                system or an on-premise solution, our team is ready to deliver
                top-quality results.
              </p>
              <Button
                className="mt-4"
                color="warning"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alert"
              >
                Our Team
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
