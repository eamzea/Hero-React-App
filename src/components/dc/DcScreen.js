import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroList from "../heroes/HeroList";

const DcScreen = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-center">
        <Col xs={12}>
          <h1>DC</h1>
          <hr />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12}>
          <HeroList publisher="DC Comics" />
        </Col>
      </Row>
    </Container>
  );
};

export default DcScreen;
