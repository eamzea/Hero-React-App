import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

const NavbarHeroes = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    history.replace("/login");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">
          Asociaciones
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </Nav>
        <Nav>
          <p className="nav-item nav-link m-0">{name}</p>
          <Button
            variant="link"
            className="nav-item nav-link"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHeroes;
