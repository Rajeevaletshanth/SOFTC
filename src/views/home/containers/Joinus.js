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
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Joinus extends React.Component {
  render() {
    return (
      <>
        <section className="section">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="12">
              <h2 className="display-3">
                   Looking for Your Next Opportunity?
                  <span className="text-warning display-4">
                    <b>Join our team and thrive</b>
                  </span>
                </h2>
                <p className="lead text-default">
                  Ready to take your software development career to the next
                  level? Our startup is looking for experienced developers to
                  join our fast-paced and innovative team. You'll have the
                  opportunity to work on challenging projects using the latest
                  technologies and make a meaningful impact. We offer a
                  competitive salary, flexible work environment, and
                  opportunities for professional development and advancement. If
                  you're excited to be a part of a dynamic startup, apply now!
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="mb-3 mb-sm-0"
                    color="warning"
                    href="#joinus"
                  >
                    Join Us Now
                  </Button>
                </div>

              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Joinus;
