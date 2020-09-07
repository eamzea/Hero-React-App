import "@testing-library/jest-dom";
import React from "react";
import { shallow, mount } from "enzyme";
import AppRouter from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";

describe("Pruebas en <AppRouter/>", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  test("Debe de mostrar login si no está autenticado", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el componente <Marvel/> si está autenticado", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: "Edgar",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find("nav").exists()).toBe(true);
  });
});
