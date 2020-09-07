import "@testing-library/jest-dom";
import React from "react";
import { shallow, mount } from "enzyme";
import DashboardRoutes from "../../routers/DashboardRoutes";
import { AuthContext } from "../../auth/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <DashboardRoutes/>", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Edgar",
    },
  };

  test("Debe mostrarse correctamente", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
