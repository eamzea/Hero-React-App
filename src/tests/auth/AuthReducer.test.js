import "@testing-library/jest-dom";
import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const state = authReducer(
      {
        logged: false,
      },
      {}
    );

    expect(state).toEqual({ logged: false });
  });
  test("Debe de autenticar", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Edgar",
      },
    };

    const state = authReducer(
      {
        logged: false,
      },
      action
    );

    expect(state).toEqual({ logged: true, name: "Edgar" });
  });

  test("Debe borrar el usuario", () => {
    const action = {
      type: types.logout,
    };

    const state = authReducer(
      {
        logged: true,
        name: "Edgar",
      },
      action
    );

    expect(state).toEqual({ logged: false });
  });
});
