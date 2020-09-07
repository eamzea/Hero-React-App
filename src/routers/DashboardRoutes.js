import React from "react";
import NavbarHeroes from "../components/ui/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import HeroScreen from "../components/heroes/HeroScreen";
import DcScreen from "../components/dc/DcScreen";
import { Container } from "react-bootstrap";
import SearchScreen from "../components/search/SearchScreen";

const DashboardRoutes = () => {
  return (
    <>
      <NavbarHeroes />
      <Container fluid>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </Container>
    </>
  );
};

export default DashboardRoutes;
