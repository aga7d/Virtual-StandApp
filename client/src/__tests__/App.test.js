import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App";
import Root from "../Root";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import StandupList from "../components/StandupList";

let wrapper;
describe("App component", () => {
  const init = pathname => {
    window.matchMedia = () => ({
      addListener: () => {},
      removeListener: () => {}
    });

    wrapper = mount(
      <Root>
        <MemoryRouter initialEntries={[pathname]}>
          <App />
        </MemoryRouter>
      </Root>
    );
  };
  afterEach(() => {
    wrapper.unmount();
  });

  describe("when pathname is set to random value", () => {
    beforeEach(() => {
      init("/glkjwvlkjwqwpok");
    });
    it("renders Header component", () => {
      expect(wrapper.find(Header).length).toEqual(1);
    });
    it("renders NotFoundPage component ", () => {
      expect(wrapper.find(NotFoundPage).length).toEqual(1);
    });
  });
  describe("when pathname is set to /standup", () => {
    beforeEach(() => {
      init("/standup");
    });
    it("renders Header component", () => {
      expect(wrapper.find(Header).length).toEqual(1);
    });
    it("renders StandupList component", () => {
      expect(wrapper.find(StandupList).length).toEqual(1);
    });
  });
});
