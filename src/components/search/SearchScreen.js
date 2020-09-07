import React, { useMemo } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import HeroCard from "../heroes/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../../selectors/getHeroByName";

const SearchScreen = ({ history }) => {
  const location = useLocation();

  let { q: query } = queryString.parse(location.search);

  if (!query) {
    query = "";
  }

  const [formValues, handleInputChange] = useForm({
    searchText: query ? query : "",
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroByName(query), [query]);

  const handleSearch = (e) => {
    e.preventDefault();

    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <Row>
        <Col xs={12}>
          <h1>Search Screen</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <p className="h4">Search Form</p>
          <hr />
          <Form onSubmit={handleSearch}>
            <Row>
              <Col xs={10}>
                <Form.Control
                  type="text"
                  placeholder="Find your Hero"
                  name="searchText"
                  value={searchText}
                  onChange={handleInputChange}
                />
              </Col>
              <Col xs={2}>
                <Button variant="outline-primary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col xs={7}>
          <p className="h4">Results</p>
          <hr />

          {query === "" && (
            <div className="p-3 mb-2 bg-info text-white rounded text-center">
              <p className="h3">Search a hero </p>
            </div>
          )}

          {query !== "" && heroesFiltered.length === 0 && (
            <div className="p-3 mb-2 bg-info text-white rounded text-center">
              <p className="h3">There is no a hero called </p>
              <p className="h4">{query}</p>
            </div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default SearchScreen;
