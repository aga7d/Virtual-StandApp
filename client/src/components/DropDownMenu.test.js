import React from "react";
import { mount } from "enzyme";
import DropDownMenu from "../components/DropDownMenu";
import FilterBar from "../components/FilterBar";
import Root from "../Root";
import history from "../history";
let wrapped;
describe("DropDownMenu", () => {
  const init = (
    initialHistory = null,
    initialState = { dropDownMenu: true }
  ) => {
    if (initialHistory) {
      history.push(initialHistory);
    }
    wrapped = mount(
      <Root initialState={initialState}>
        <DropDownMenu />
      </Root>
    );
  };
  afterEach(() => {
    wrapped.unmount();
  });
  describe("when dropdownMenu is set to true", () => {
    beforeEach(() => {
      init();
    });
    it("shows two anchor tags", () => {
      expect(wrapped.find("a").length).toEqual(2);
    });
    it("does not render FilterBar when pathname is different than /standup", () => {
      if (history.location.pathname !== "/standup") {
        expect(wrapped.find(FilterBar).length).toEqual(0);
      }
    });
    describe("for pathname set to /standup", () => {
      beforeEach(() => {
        init("/standup");
      });
      it("renders FilterBar component", () => {
        expect(wrapped.find(FilterBar).length).toEqual(1);
      });
    });
  });
  describe("when dropDownMenu is set to false", () => {
    beforeEach(() => {
      init(null, { dropDownMenu: false });
    });
    it("does not show any anchor tags", () => {
      expect(wrapped.find("a").length).toEqual(0);
    });
  });
});
