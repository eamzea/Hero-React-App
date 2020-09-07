import "@testing-library/jest-dom";
import React from "react";
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import SearchScreen from "../../../components/search/SearchScreen";
import { MemoryRouter, Route } from "react-router-dom";

describe("Pruebas en <SearchScreen/>", () => {
  test("Debe mostrarse correctamente con valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".h3").text().trim()).toBe("Search a hero");
  });

  test("Debe mostrar a Batman y el input con el valor del query string", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe("batman");
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar error si no encuentra hero", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman12345"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find(".h3").text().trim()).toBe("There is no a hero called");
    expect(wrapper.find(".bg-info").childAt(1).text().trim()).toBe(
      "batman12345"
    );
  });

  test("Debe llamar push del history", () => {
    const historyMock = {
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman12345"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find("input").simulate("change", {
      target: {
        name: "searchText",
        value: "batman",
      },
    });

    wrapper.find("form").prop("onSubmit")({
      preventDefault() {},
    });

    expect(historyMock.push).toHaveBeenCalledWith(`?q=batman`);
  });
});
