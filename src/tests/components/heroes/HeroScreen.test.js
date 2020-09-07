import "@testing-library/jest-dom";
import React from "react";
import HeroScreen from "../../../components/heroes/HeroScreen";
import { shallow, mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";

describe("Pruebas en <HeroScreen/>", () => {
  const historyMock = {
    length: 10,
    goBack: jest.fn(),
    push: jest.fn(),
  };

  test("Debe mostrar Redirect si no hay argumentos", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    );

    expect(wrapper.find("Redirect").exists()).toBe(true);
  });

  test("Debe mostrar un Hero si hay argumentos", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find("img").prop("src")).toEqual(
      `../assets/heroes/marvel-spider.jpg`
    );
  });

  test("Debe de regresar a la pantalla anterior", () => {
    const historyMock = {
      length: 1,
      goBack: jest.fn(),
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find("Button").prop("onClick")();

    expect(historyMock.push).toHaveBeenCalledWith("/");
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });

  test("Debe de regresar a la pantalla anterior", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find("Button").prop("onClick")();

    expect(historyMock.push).not.toHaveBeenCalled();
    expect(historyMock.goBack).toHaveBeenCalled();
  });

  test("Debe de llamar redirect si no existe", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider123456789"]}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe("");
  });
});
