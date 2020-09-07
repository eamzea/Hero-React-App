import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

const HeroScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length < 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <Row className="mt-3">
      <Col xs={4}>
        <Image
          src={`../assets/heroes/${id}.jpg`}
          alt={superhero}
          thumbnail
          className="animate__animated animate__fadeInLeft"
        />
      </Col>
      <Col xs={8} className="animate__animated animate__fadeIn">
        <p className="h3">{superhero}</p>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <p class="font-weight-bold d-inline">Alter ego: </p>
            {alter_ego}
          </ListGroup.Item>
          <ListGroup.Item>
            <p class="font-weight-bold d-inline">Publisher: </p>
            {publisher}
          </ListGroup.Item>
          <ListGroup.Item>
            <p class="font-weight-bold d-inline">First Appearance: </p>
            {first_appearance}
          </ListGroup.Item>
        </ListGroup>
        <p className="h3">Characters</p>
        <p>{characters}</p>
        <Button variant="primary" onClick={handleReturn}>
          Return
        </Button>
      </Col>
    </Row>
  );
};

export default HeroScreen;
