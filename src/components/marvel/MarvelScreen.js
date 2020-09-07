import React from "react";
import HeroList from "../heroes/HeroList";
import { Container, Row, Col } from "react-bootstrap";

const MarvelScreen = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-center">
        <Col xs={12}>
          <h1>Marvel</h1>
          <hr />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12}>
          <HeroList publisher="Marvel Comics" />
        </Col>
      </Row>
    </Container>
  );
};

export default MarvelScreen;
