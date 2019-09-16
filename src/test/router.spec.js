import React from "react";
import Enzyme, { mount } from "enzyme";
import Home from "../components/home";
import DoctorListContainer from "../containers/doctorListContainer";
import { MemoryRouter } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
describe("routes using memory router", () => {
  it("should show Home component for / router", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/doctors/:location"
            exact
            component={DoctorListContainer}
          />
          <Redirect to="/" />
        </Switch>
      </MemoryRouter>
    );
    expect(component.find(Home)).toHaveLength(1);
  });
  it("should show Home component for route not defined", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/location/unknown"]}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/doctors/:location"
            exact
            component={DoctorListContainer}
          />
          <Redirect to="/" />
        </Switch>
      </MemoryRouter>
    );
    expect(component.find(Home)).toHaveLength(1);
  });
});
