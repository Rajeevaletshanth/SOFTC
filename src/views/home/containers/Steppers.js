import React from 'react';
import {
  Container,
  Row,
  Col,
  Spinner,
  Button,
} from 'reactstrap';

const Steppers = () => {


  return (
    <Container>
      <Row className="text-center">
      <Col className="mt-2" md={4} lg={4}>
        <Button className="bg-white rounded-circle text-purple p-5" size="lg">as</Button>
      </Col>
      <Col className="mt-2" md={4} lg={4}>
        <Button className="bg-white rounded-circle text-purple p-5" size="lg">as</Button>
      </Col>
      <Col className="mt-2" md={4} lg={4}>
        <Button className="bg-white rounded-circle text-purple p-5" size="lg">as</Button>
      </Col>
    </Row>
    </Container>
  );
};

export default Steppers;
