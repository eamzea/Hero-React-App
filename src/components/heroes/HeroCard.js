import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <Card>
      <Row noGutters>
        <Col xs={5}>
          <Card.Img
            variant="top"
            src={`./assets/heroes/${id}.jpg`}
            alt={superhero}
          />
        </Col>
        <Col xs={7}>
          <Card.Body>
            <Card.Title>{superhero}</Card.Title>
            <Card.Text>{alter_ego}</Card.Text>
            {alter_ego !== characters && <Card.Text>{characters}</Card.Text>}
            <Card.Text>
              <small className="text-muted">{first_appearance}</small>
            </Card.Text>
            <Link to={`./hero/${id}`}>
              <Button variant="outline-primary">Mas...</Button>
            </Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default HeroCard;
