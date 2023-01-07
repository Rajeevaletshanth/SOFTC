import React from "react";

// reactstrap components
import { Button, Container, Row, Col, CardImg, Card } from "reactstrap";
import "../../../assets/css/main.css";

const Testimonial = () => {
  return (
    <>
      <Container>
        <section
          className="section section-components pb-0"
          id="section-components"
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Container className="mb-5">
                  <Row>
                    <Col style={{ minWidth: "50px" }} lg="12">
                      <div className="display-3">
                        <small className="text-uppercase font-weight-bold">
                          Why Choose Us
                        </small>
                      </div>
                      <div className="text-muted mb-4">
                        <small className="text-uppercase font-weight-bold">
                          Because of our{" "}
                          <span className="text-purple ml-1">
                            fresh perspective
                          </span>,
                          <span className="text-purple ml-1">cutting-edge</span>{" "}
                          technology, and
                          <span className="text-purple ml-1">passion</span> for
                          solving problems.
                        </small>
                      </div>
                      <div>
                        <li>
                            Expertise: If your company has a unique set of skills or
                        experience that sets it apart from others in the
                        industry, highlighting this expertise can be a
                        compelling reason for customers to choose your company.
                        </li>
                        <li>
                        Customer service: Providing excellent customer service
                        can be a differentiator for your company. If you have a
                        track record of going above and beyond to help
                        customers, this can be a reason for them to choose your
                        company over others. 
                        </li>
                        <li>
                        Value for money: If your company
                        offers a good value for the price, this can be a reason
                        for customers to choose your company. This could mean
                        offering competitive pricing, discounts, or added
                        bonuses or perks for choosing your company.
                        </li>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default Testimonial;
