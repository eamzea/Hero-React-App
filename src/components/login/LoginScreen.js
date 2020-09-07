import React, { useContext } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    dispatch({
      type: types.login,
      payload: {
        name: "Edgar",
      },
    });

    history.replace(lastPath);
  };

  return (
    <Container fluid className="mt-5 p-5 vh-100">
      <Row className="justify-content-center h-100">
        <Col
          xs={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h1>Login Screen</h1>
          <hr />
          <Button variant="primary" onClick={handleLogin} size="lg">
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
