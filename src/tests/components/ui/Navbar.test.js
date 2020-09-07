import "@testing-library/jest-dom";
import React from "react";
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { MemoryRouter, Router } from "react-router-dom";
import NavbarHeroes from "../../../components/ui/Navbar";
import { types } from "../../../types/types";

describe("Pruebas en <Navbar/>", () => {
  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Edgar",
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <NavbarHeroes />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").text().trim()).toBe("Edgar");
  });

  test("Debe de hacer logout y history", () => {
    wrapper.find("Button").prop("onClick")();

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout,
    });

    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
